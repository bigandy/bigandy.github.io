---
layout: null
---
importScripts('/js/vendor/serviceworker-cache-polyfill.js');

console.log('hello Worlds!');

var cacheName = 'bigandy-cache-v2';
var filesToCache = [
    // Stylesheets
    '{{site.url}}/css/style.css',
    '{{site.url}}/css/font.css',

    // Posts
    {% for post in site.posts %}
    "{{site.url}}{{ post.url }}", {% endfor %}

    {% for page in site.pages %}'{{site.url}}{{ page.url }}',
    {% endfor %}
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('caching files');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);
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
                    if ((requestUrl.pathname === '/about') || (requestUrl.pathname === '/about/')) {
                        console.log('uh oh');
                        return fetch('/about/index.html');
                    }

                    console.log('* [Fetching]: ' + event.request.url);
                    return fetch(event.request);
                }
            )
        );
    }
});