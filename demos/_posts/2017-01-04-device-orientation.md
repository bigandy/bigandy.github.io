---
layout: post-demos
title: Device Orientation
published: true
category: demos
---
Trying out ideas from the final 24ways article [Taking Device Orientation for a Spin](https://24ways.org/2016/taking-device-orientation-for-a-spin/)

<script>
window.addEventListener('deviceorientation', function(e) {
    console.log(e.alpha);
    console.log(e.beta);
    console.log(e.gamma);
});
</script>
