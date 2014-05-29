---
layout: post-demos
title: picture element and Picturefill Demo
published: true
summary: Testing out picturefill and picture element
category: demos
custom-script: [<script src="/js/libs/picturefill/dist/picturefill.min.js" async></script>]
---


<picture>
	<source media="(min-width: 60em)" srcset="/images/picture-demo/large.jpg">
	<source media="(min-width: 40em)" srcset="/images/picture-demo/700.jpg">
	<source media="(min-width: 30em)" srcset="/images/picture-demo/500.jpeg">
	<img src="/images/picture-demo/fallback.jpeg" alt="">
</picture>