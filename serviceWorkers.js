---
layout: null
---
importScripts('/js/vendor/serviceworker-cache-polyfill.js');

console.log('hello Worlds!');

var cacheName = 'bigandy-cache-v8';
var filesToCache = [
    // Stylesheets
    '/css/style.css',
    '/css/font.css',
    'favicon.ico',

    // Posts
    {% for post in site.posts %}
    "{{ post.url }}/index.html", {% endfor %}

    {% for page in site.pages %}'{{ page.url }}',
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

    event.respondWith(
        caches.match(event.request)
            .then(function(match) {
                if (match) {
                    console.log('* [Serving cached]: ' + event.request.url);
                    return match;
                }

                // Redirecting /about to /about/index.html
                if ((requestUrl.pathname === '/about') || (requestUrl.pathname === '/about/')) {
                    return fetch('/about/index.html');
                }

                // Redirecting /blog to /blog/index.html
                if ((requestUrl.pathname === '/blog') || (requestUrl.pathname === '/blog/')) {
                    return fetch('/blog/index.html');
                }

                // Redirecting /demos to /demos/index.html
                if ((requestUrl.pathname === '/demos') || (requestUrl.pathname === '/demos/')) {
                    return fetch('/demos/index.html');
                }

                console.log('* [Fetching]: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );

});