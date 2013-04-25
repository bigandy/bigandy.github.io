---
layout: post-demos
title: jQuery Carousel
published: true
summary: My first attempt at creating a carousel with jQuery.
category: demos
post-class: carousel-v1
script:
- libs/jquery.min.js
- modules/carousel.js
css:
- demos/carousel.css
---
<div id="carousel" class="carousel">
	<div class="carousel-inner">
		<!-- <img src="/images/hot/hot1.jpg" alt=""> -->
		<img src="/images/hot/hot2.jpg" alt="">
		<img src="/images/hot/hot3.jpg" alt="">
		<img src="/images/hot/hot4.jpg" alt="">
		<img src="/images/hot/hot5.jpg" alt="">
		<img src="/images/hot/hot6.jpg" alt="">
		<img src="/images/hot/hot1.jpg" alt="">
		<img src="/images/hot/hot2.jpg" alt="">
		<img src="/images/hot/hot3.jpg" alt="">
		<img src="/images/hot/hot4.jpg" alt="">
		<img src="/images/hot/hot5.jpg" alt="">
		<img src="/images/hot/hot6.jpg" alt="">
	</div>
</div>

here's what I need to do:

- get number of images (imgs.length)
- width of each image (here they are all the same width)
- create left and right links
- work out where we are currently
- if click left or right, go onto previous or next image

