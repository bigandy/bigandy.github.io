/* Tabs v2 */

$(document).ready(function() {

	function tabsFunc(opts) {

		// define default settings
		var defaults = {
			'selected': 4,
			'time': 300
		};

		var settings = $.extend({}, defaults, opts), // extend defaults with the opts that are inputted into the function
			tabContainer = $("#tabs"),
			tabs = tabContainer.find("div"),
			headings = tabs.find("h2"), // get all the h2s
			headingsText = headings.text(),
			headingsLength = headings.length, // count the number of headings
			nav = "",
			navLinks = "",
			currentLink = settings.selected, // integer
			currentTime = settings.time; // integer

			// add the nav before the tabs
			tabContainer.before('<nav id="nav" />');
			nav = $("#nav");

			// output each title wrapped in an <a> tag
			headings.each(function(i){
				nav.append('<a href="#" data-tab="'+i+'">' + $(this).text() + '</a>');
				i++;
			});

			// put data-content onto each div
			tabs.each(function(j){
				$(this).attr("data-content", j+1);
			});

			navLinks = nav.find("a");

			// add class of selected to initially selected a
			navLinks.eq(currentLink).addClass('selected');

			// hide all tab content
			tabs.hide();
			tabs.eq(currentLink).show();

			navLinks.on("click", function(e){
				e.preventDefault();
				var $this = $(this),
					thisData = $this.data('tab');

				$this.addClass('selected').siblings().removeClass('selected');
				// show desired tab, hide others
				tabs.eq(thisData).show(currentTime).siblings().hide(currentTime);

			});
	}

	var myOpts = {
		'time': 100,
		'selected': 0
	};

	// Call the function with options
	tabsFunc(myOpts);

});