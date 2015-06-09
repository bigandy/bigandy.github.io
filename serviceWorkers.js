---
layout: null
---
importScripts('/js/vendor/serviceworker-cache-polyfill.js');

console.log('hello Worlds!');

var cacheName = 'bigandy-cache-v5';
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

    event.respondWith(
        caches.match(event.request)
            .then(function(match) {
                if (match) {
                    console.log('* [Serving cached]: ' + event.request.url);
                    return match;
                }

                // Redirecting /about to /about/index.html
                if ((requestUrl.pathname === '{{site.url}}/about') || (requestUrl.pathname === '{{site.url}}/about/')) {
                    return fetch('{{site.url}}/about/index.html');
                }

                // Redirecting /blog to /blog/index.html
                if ((requestUrl.pathname === '{{site.url}}/blog') || (requestUrl.pathname === '{{site.url}}/blog/')) {
                    return fetch('{{site.url}}/blog/index.html');
                }

                // Redirecting /demos to /demos/index.html
                if ((requestUrl.pathname === '{{site.url}}/demos') || (requestUrl.pathname === '{{site.url}}/demos/')) {
                    return fetch('{{site.url}}/demos/index.html');
                }

                console.log('* [Fetching]: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );

});