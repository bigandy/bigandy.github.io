---
layout: null
---
importScripts('/js/async-waituntil.js');

const version = '{% if site.github %}{{site.github.build_revision}}{% endif %}';
const staticCacheName = version + 'static';

function updateStaticCache() {
    return caches.open(staticCacheName)
    .then( cache => {
        // These items won't block the installation of the Service Worker
        cache.addAll([
			'/css/style.css',
			'/favicon.ico',
			'/js/build/script.min.js',
			'/manifest.json',
			'/images/manifest/ba-128.png',
			'/images/manifest/ba-152.png',
			'/images/manifest/ba-144.png',
			'/images/manifest/ba-192.png',
			'/images/manifest/ba-256.png',
			'/images/manifest/ba-512.png',
            '/fonts/roboto-slab-v6-latin-700.woff2',
            '/fonts/roboto-slab-v6-latin-700.woff',
            '/fonts/open-sans-v13-latin-regular.woff2',
            '/fonts/open-sans-v13-latin-regular.woff',
        ]);

        // These items must be cached for the Service Worker to complete installation
        return cache.addAll([
            // Posts
			{% for post in site.posts %}
			'{{ post.url }}', {% endfor %}
			// Pages
			{% for page in site.pages %}{% if page.cache == true %}
			'{{ page.url }}', {% endif %}{% endfor %}
        ]);
    });
}

// Remove caches whose name is no longer valid
const clearOldCaches = () => {
    return caches.keys()
        .then(keys => {
            return Promise.all(keys
                .filter(key => key.indexOf(version) !== 0)
                .map(key => caches.delete(key))
            );
        });
}

self.addEventListener('install', event => {
    event.waitUntil(
        updateStaticCache()
        .then( () => self.skipWaiting() )
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        clearOldCaches()
        .then( () => self.clients.claim() )
    );
});

self.addEventListener('fetch', event => {
    let request = event.request;
    // Look in the cache first, fall back to the network
    event.respondWith(
        // CACHE
        caches.match(request)
        .then( responseFromCache => {
            // Did we find the file in the cache?
            if (responseFromCache) {
                // If so, fetch a fresh copy from the network in the background
                // (using the async waitUntil polyfill)
                event.waitUntil(
                    // NETWORK
                    fetch(request)
                        .then( responseFromFetch => {
                            // Stash the fresh copy in the cache
                            caches.open(staticCacheName)
                            .then( cache => {
                                cache.put(request, responseFromFetch);
                            });
                        })
                );
                return responseFromCache;
            }
            // NETWORK
            // If the file wasn't in the cache, make a network request
            fetch(request)
            .then( responseFromFetch => {
                // Stash a fresh copy in the cache in the background
                // (using the async waitUntil polyfill)
                let responseCopy = responseFromFetch.clone();
                event.waitUntil(
                    caches.open(staticCacheName)
                    .then( cache => {
                        cache.put(request, responseCopy);
                    })
                );
                return responseFromFetch;
            });
        })
    );
});
