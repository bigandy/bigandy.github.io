/* Tabs v1 */
$(document).ready(function() {
	var carousel = $("#carousel"),
		imgs = carousel.find('img'),
		imgsLength = imgs.length,
		imgsWidth = imgs[0].width,
		carouselWidth = imgsWidth * imgsLength,
		carouselInner = carousel.find("div"),
		linkArgs = []
		current = 0,
		links = carousel.find("a"),
		next = current + 1,
		prev = current -1;


	// constrain the carousel container with the width of one image
	carouselInner.width(carouselWidth);
	carousel.width(imgsWidth);

	// create the next and before buttons, attach to #carousel
	linkArgs = {
		"next": {
			"text": "next",
			"data": "next"
		},
		"prev": {
			"text": "prev",
			"data": "prev"
		}
	};

	// visual representation of the nav
	$("<ul></ul>", {
		id: "navigation"
	}).appendTo(carousel);
	var nav = $("#navigation");

	for ( var i = 0, len = imgsLength; i < len; i++  ) {
		// console.log(i);
		$("<li />", {
			class: 'item-'+i
		}).appendTo(nav);
	}
	nav.find("li").eq(current).addClass('current-nav').siblings().removeClass('current-nav');

	// console.log(linkArgs);

	// console.log(linkArgs.next.text);

	$("<a></a>", {
		text: "prev",
		class: "prev",
		"data-ref": "prev",
		href: "#"
	}).appendTo(carousel);
	$("<a></a>", {
		text: "next",
		class: "next",
		data: "next",
		href: "#"
	}).appendTo(carousel);

	$("<h2>", {
		text: current
	}).prependTo(carousel);





	if (carousel !== undefined) {
		console.log("we have carousel!");
	}
	var links = carousel.find("a")
		h2 = carousel.find("h2"),
		h2Text = h2.text();
	// console.log(links);

	// console.log(h2Text);

	links.on("click", function(e){
		e.preventDefault();
		var $this = $(this);



		if ($this.text() === "prev") {

			if (current === 0) {
				current = imgsLength;
			}

			carouselInner.css({
				"margin-left": -imgsWidth * (current - 1)
			});

			current--;
			h2.text(current);
		} else {
			if (current === imgsLength - 1) {
				current = -1;
			}

			carouselInner.css({
				"margin-left": -imgsWidth * (current + 1)
			});

			current++;
			h2.text(current)
		}

		nav.find("li").eq(current).addClass('current-nav').siblings().removeClass('current-nav');

	});






});