---
layout: post-demos
title: Picture element and image format switching
published: true
summary: Want to serve webp to browsers that support, with easy fallback for those that don't? Here's how.
category: demos
post-class: full-width
custom-script: [<script src="/bower_components/picturefill/dist/picturefill.min.js" async></script>]
---

With the &lt;picture&gt; element you can easily serve up different file types depending on whether the browser supports them or not. This is really useful when it comes to WebP. WebP file sizes are [25-34% smaller in file size](https://developers.google.com/speed/webp/?csw=1) in comparison to jpegs, but are currently [only supported by Chrome and Opera](http://caniuse.com/#feat=webp). So rather than using another javascript script to detect for webp browser support, the picture element can do it out of the box.


<pre><code>&lt;picture&gt;
&lt;source srcset="/images/picture-demo/550_404.webp" type="image/webp"&gt;
&lt;source srcset="/images/picture-demo/550_404.jpg" type="image/jpeg"&gt;
&lt;img src="/images/picture-demo/fallback.jpeg" alt="fallback image"&gt;
&lt;/picture&gt;</code></pre>

<picture>
	<source srcset="/images/picture-demo/550_404.webp" type="image/webp">
	<source srcset="/images/picture-demo/550_404.jpg" type="image/jpeg">
	<img src="/images/picture-demo/fallback.jpeg" alt="fallback image">
</picture>