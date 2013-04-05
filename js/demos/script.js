/* Here's some JS ! */


$(document).ready(function() {
	(function(){
		var tabs = $("div#tabs"),
		tabContainers = tabs.find('div'),
		opts = {};

		// Here are the options. Not much so far!
		opts = {
			'selected': 0,
		};

		tabs.before('<nav id="nav" />');
		var nav = $("#nav"),
			count = 0;

		$(tabContainers).each(function() {
			var title = $(this).find("h2"),
				titleText = title.text(),
				$this = $(this);

			// add data-tab-content with number related to which tab it is
			$this.attr('data-tab-content', count);

			// add in the links with copy from the titles
			nav.append('<a href="#" data-tab="'+count+'">' + titleText + '</a>');

			// remove titles from regular content.
			title.remove("h2");

			// increment count by one
			count++;
		});

		// hide other tab content
		tabContainers.addClass('hidden');

		// except for 'selected' one
		tabContainers.eq(opts.selected).removeClass('hidden');

		var navItems = nav.find("a");
		navItems.eq(opts.selected).addClass('selected');

		navItems.on("click", function(e){
			e.preventDefault();
			var $this = $(this),
				linkCopy = $this.text(); // copy of link that has been clicked on


			$this.addClass("selected")
				.siblings().removeClass("selected");

			var dataTab = $this.data('tab');

			// show selected content
			tabContainers.eq(dataTab).removeClass('hidden').siblings().addClass('hidden');
		});



	})();
});