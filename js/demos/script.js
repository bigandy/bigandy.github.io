/* Here's some JS ! */


$(document).ready(function() {
	(function(){
		var tabs = $("div#tabs"),
		tabContainers = tabs.find('div'),
		opts = {};


		opts = {
			'selected': 1,
		};



		tabs.before('<nav id="nav" />');
		var nav = $("#nav"),
			count = 0;

		$(tabContainers).each(function() {
			var title = $(this).find("h2"),
				titleText = title.text(),
				$this = $(this);
				// console.log($this);

				$this.attr('data-tab-content', count);

			nav.append('<a href="#" data-tab="'+count+'">' + titleText + '</a>');
			// console.log(nav);

			title.remove("h2");

			// console.log($this);
			count++;
			// var trimTitleText = trimText.replace(/ /g,'');
			// $this.addClass("tab-" + trimTitleText);
		});

		// hide others
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
			console.log(dataTab);

			

			// console.log(linkCopy);
			
			// show selected content
			tabContainers.eq(dataTab).removeClass('hidden').siblings().addClass('hidden');
		});



	})();
});