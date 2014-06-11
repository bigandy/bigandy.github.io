---
layout: post-demos
title: Srcset and sizes attributes
published: true
summary: Now that I've covered picture element, I'll move to srcset and sizes attributes
category: demos
post-class: full-width
custom-script: [<script src="/js/libs/picturefill/dist/picturefill.min.js" async></script>]
---

## 1x, 2x, 3x...
Want to show a different image to retina screens?
Use the 2x component of srcset.

<img src="images/picture-demo/fallback.jpeg"
srcset="/images/picture-demo/400x400.jpeg 1x,
/images/picture-demo/800x800.jpeg 2x"
sizes=""
alt="Some alternate text"
/>
