---
layout: null
---
importScripts('{{site.baseurl}}/js/vendor/serviceworker-cache-polyfill.js');

console.log('hello Worlds!');

var cacheName = 'bigandy-cache-v2';
var filesToCache = [
    // Stylesheets
    '{{site.baseurl}}/css/style.css',
    '{{site.baseurl}}/css/font.css',

    // Posts
    {% for post in site.posts %}
    "{{site.baseurl}}{{ post.url }}", {% endfor %}

    {% for page in site.pages %}'{{site.baseurl}}{{ page.url }}',
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
                if ((requestUrl.pathname === '{{site.baseurl}}/about') || (requestUrl.pathname === '{{site.baseurl}}/about/')) {
                    return fetch('{{site.baseurl}}/about/index.html');
                }

                // Redirecting /blog to /blog/index.html
                if ((requestUrl.pathname === '{{site.baseurl}}/blog') || (requestUrl.pathname === '{{site.baseurl}}/blog/')) {
                    return fetch('{{site.baseurl}}/blog/index.html');
                }

                // Redirecting /demos to /demos/index.html
                if ((requestUrl.pathname === '{{site.baseurl}}/demos') || (requestUrl.pathname === '{{site.baseurl}}/demos/')) {
                    return fetch('{{site.baseurl}}/demos/index.html');
                }

                console.log('* [Fetching]: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );

});