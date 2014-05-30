---
layout: post-demos
title: picture element and Picturefill Demo
published: true
summary: Testing out picturefill and picture element
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill/dist/picturefill.min.js" async></script>]
---

<picture>
	<source media="(min-width: 1600px)" srcset="/images/picture-demo/1500.jpeg">
	<source media="(min-width: 1500px)" srcset="/images/picture-demo/1400.jpeg">
	<source media="(min-width: 1400px)" srcset="/images/picture-demo/1300.jpeg">
	<source media="(min-width: 1300px)" srcset="/images/picture-demo/1200.jpeg">
	<source media="(min-width: 1200px)" srcset="/images/picture-demo/1100.jpeg">
	<source media="(min-width: 1100px)" srcset="/images/picture-demo/1000.jpeg">
	<source media="(min-width: 1000px)" srcset="/images/picture-demo/900.jpeg">
	<source media="(min-width: 900px)" srcset="/images/picture-demo/800.jpeg">
	<source media="(min-width: 800px)" srcset="/images/picture-demo/700.jpeg">
	<source media="(min-width: 700px)" srcset="/images/picture-demo/600.jpeg">
	<source media="(min-width: 600px)" srcset="/images/picture-demo/500.jpeg">
	<source media="(min-width: 500px)" srcset="/images/picture-demo/400.jpeg">
	<img src="/images/picture-demo/fallback.jpeg" alt="fallback image">
</picture>