---
layout: post-demos
title: Picture element and nx in srcset
published: true
summary: Trying out other aspects of picture element
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill/dist/picturefill.min.js" async></script>]
---

So it seems as if I can add nx (1x for standard pixel density, 2x for retina or double, 3x and so on for higher pixel density screens). Here is the code to swap out one image for another when on 2x or 3x devices:


<pre><code>&lt;picture&gt;
&lt;source media="(min-width: 600px)"
srcset="/images/picture-demo/600.jpeg 1x,
/images/picture-demo/700.jpeg 2x,
/images/picture-demo/800.jpeg 3x"&gt;
&lt;img src="/images/picture-demo/fallback.jpeg" alt="fallback image"&gt;
&lt;/picture&gt;</code></pre>

<picture>
	<source media="(min-width: 600px)" srcset="/images/picture-demo/600.jpeg 1x, /images/picture-demo/700.jpeg 2x, /images/picture-demo/800.jpeg 3x">
	<img src="/images/picture-demo/fallback.jpeg" alt="fallback image">
</picture>