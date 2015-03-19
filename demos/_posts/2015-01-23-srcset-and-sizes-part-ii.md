---
layout: post-demos
title: Srcset and sizes - part ii
published: true
summary: Second Demo getting my head around the srcset and sizes syntax
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill.min.js" async></script>]
---

<pre><code>&lt;img
src="/images/picture-demo/fallback.jpeg"
srcset="/images/picture-demo/400x400.jpeg 400w,
/images/picture-demo/800x800.jpeg 800w,
/images/picture-demo/1255.jpeg 1255w"
sizes="100%"
alt="Some alternate text"
/&gt;</code></pre>

<img src="/images/picture-demo/fallback.jpeg"
srcset="/images/picture-demo/400x400.jpeg 400w,
/images/picture-demo/800x800.jpeg 800w,
/images/picture-demo/1200.jpeg 1200w,
/images/picture-demo/1300.jpeg 1300w"
sizes="(min-width: 1200px) 1199px, (min-width: 700px) 800px, 100%" alt="Some alternate text" />
