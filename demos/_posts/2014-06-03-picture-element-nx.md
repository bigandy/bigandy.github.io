---
layout: post-demos
title: Picture element and nx in srcset
published: true
summary: Trying out other aspects of picture element
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill/dist/picturefill.min.js" async></script>]
---

<pre><code>&lt;source media="(min-width: 600px)"
srcset="/images/picture-demo/600.jpeg 1x,
/images/picture-demo/700.jpeg 2x,
/images/picture-demo/800.jpeg 3x"&gt;</code></pre>

<picture>
	<source media="(min-width: 600px)" srcset="/images/picture-demo/600.jpeg 1x, /images/picture-demo/700.jpeg 2x, /images/picture-demo/800.jpeg 3x">
	<img src="/images/picture-demo/fallback.jpeg" alt="fallback image">
</picture>