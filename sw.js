---
layout: null
---

const cache = {
    version: '{% if site.github %}{{site.github.build_revision}}{% endif %}'
};

var filesToCache = [
	// Stylesheets
	'/css/style.css',
	'/css/font.css',

	// Favicon
	'/favicon.ico',

	// Posts
	{% for post in site.posts %}
	'{{ post.url }}', {% endfor %}

	{% for page in site.pages %}'{{ page.url }}',
	{% endfor %}
];

// https://ponyfoo.com/articles/serviceworker-revolution
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(function (keys) {
			return Promise.all(keys
				.filter(function (key) {
					return key.indexOf(cache.version) !== 0;
				})
				.map(function (key) {
					return caches.delete(key);
				})
			);
		})
	);
});

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(cache.version).then((cache) => {
			return cache.addAll(filesToCache)
				).then(() => {
					return self.skipWaiting();
				});
		})
	);
});

self.addEventListener('fetch', function(event) {
	var requestUrl = new URL(event.request.url);
	
	console.log(`Request Url: ${requestUrl}`);

	event.respondWith(
		caches.match(event.request)
			.then(function(match) {
				if (match) {
					console.log('* [Serving cached]: ' + event.request.url);
					return match;
				}

				// Redirecting /about to /about/index.html
				if ((requestUrl.pathname == '/about') || (requestUrl.pathname === '/about/')) {
					return fetch('/about/index.html');
				}

				// Redirecting /blog to /blog/index.html
				if ((requestUrl.pathname == '/blog') || (requestUrl.pathname === '/blog/')) {
					return fetch('/blog/index.html');
				}

				// Redirecting /demos to /demos/index.html
				if ((requestUrl.pathname == '/demos') || (requestUrl.pathname === '/demos/')) {
					return fetch('/demos/index.html');
				}

				console.log('* [Fetching]: ' + event.request.url);
				return fetch(event.request);
			}
		)
	);

});
