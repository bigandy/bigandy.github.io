---
layout: post-demos
title: Srcset and sizes attributes
published: true
summary: Now that I've covered picture element, I'll move to srcset and sizes attributes
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill.min.js" async></script>]
---

## 1x, 2x, 3x, 4x...
Want to show a different image to retina screens?
Use the 2x component of srcset.

It turns out that my phone (Nexus 6) is 4x.

<pre><code>&lt;img src="images/picture-demo/fallback.jpeg"
srcset="/images/picture-demo/400x400.jpeg 1x,
/images/picture-demo/800x800.jpeg 2x,
/images/picture-demo/1200.jpeg 3x,
/images/picture-demo/1600.jpeg 4x"
sizes=""
alt="Some alternate text"
/&gt;</code></pre>


<img src="images/picture-demo/fallback.jpeg"
srcset="/images/picture-demo/400x400.jpeg 1x,
/images/picture-demo/800x800.jpeg 2x,
/images/picture-demo/1200.jpeg 3x,
/images/picture-demo/1600.jpg 4x"
sizes=""
alt="Some alternate text"
/>
