---
layout: null
---
importScripts('..vendor/serviceworker-cache-polyfill.js');

alert('hello Worlds!');

var cacheName = 'bigandy-cache-v1';
var filesToCache = [
    // Stylesheets
    '/css/style.css',
    '/css/font.css',

    // Posts
    {% for post in site.posts %}
    "{{ post.url }}", {% endfor %}

    {% for page in site.pages %}'{{ page.url }}',
    {% endfor %}
];


self.addEventListener('install', function(event) {
    console.log('installing');
    event.waitUntil(
        console.log('yeha');
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);

    console.log(requestUrl);

    if (requestUrl.host == 'fonts.gstatic.com') {
        // event.respondWith(
        //     caches.open('eduardoboucas.com-fonts')
        //         .then(function (cache) {
        //             return cache.match(event.request).then(function (match) {
        //                 if (match) {
        //                     console.log('[*] Serving cached font: ' + event.request.url);

        //                     return match;
        //                 }

        //                 return fetch(event.request).then(function (response) {
        //                     cache.put(event.request, response.clone());
        //                     console.log('[*] Adding font to cache: ' + event.request.url);

        //                     return response;
        //                 });
        //             });
        //         })
        // );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then(function(match) {
                    if (match) {
                        console.log('* [Serving cached]: ' + event.request.url);
                        return match;
                    }

                    // Redirecting /blog to /blog/index.html
                    if ((requestUrl.pathname == '/blog') || (requestUrl.pathname == '/blog/')) {
                        return fetch('/blog/index.html');
                    }

                    console.log('* [Fetching]: ' + event.request.url);
                    return fetch(event.request);
                }
            )
        );
    }
});