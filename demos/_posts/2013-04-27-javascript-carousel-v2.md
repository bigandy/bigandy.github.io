---
layout: post-demos
title: jQuery Carousel v2
published: true
summary: My second attempt at creating a carousel with jQuery.
category: demos
post-class: carousel-v2
script:
- libs/jquery/jquery.min.js
- modules/carousel-v2.js
css:
- demos/carousel.css
---
<div id="carousel" class="carousel">
	<div class="carousel-inner">
		<img src="/images/hot/hot2.jpg" alt="">
		<img src="/images/hot/hot3.jpg" alt="">
		<img src="/images/hot/hot4.jpg" alt="">
		<img src="/images/hot/hot5.jpg" alt="">
		<img src="/images/hot/hot6.jpg" alt="">
		<img src="/images/hot/hot2.jpg" alt="">
		<img src="/images/hot/hot3.jpg" alt="">
		<img src="/images/hot/hot4.jpg" alt="">
		<img src="/images/hot/hot5.jpg" alt="">
		<img src="/images/hot/hot6.jpg" alt="">
	</div>
</div>
<div id="slider-nav">
	<button data-dir="prev">Prev</button>
	<button data-dir="next">Next</button>
</div>
Here's what I want to do this time:

- reduce amount of code compared with [carousel v1](/2013/04/25/javascript-carousel/)
- better code structure
- when click on blob, take you to that image ==> do on next iteration of carousel (didn't manage to do this in v1)