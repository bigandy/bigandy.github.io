/* Here's some JS ! */


$(document).ready(function() {
	(function(){
		var tabs = $("div#tabs"),
		tabContainers = tabs.find('div');



		tabs.before('<nav id="nav" />');
		var nav = $("#nav"),
			count = 0;

		$(tabContainers).each(function() {
			var title = $(this).find("h2"),
				titleText = title.text(),
				$this = $(this);



			nav.append('<a href="#">' + titleText + '</a>');
			// console.log(nav);

			title.remove("h2");

			// console.log($this);
			count++;
			// var trimTitleText = trimText.replace(/ /g,'');
			// $this.addClass("tab-" + trimTitleText);
		});

		nav.find("a").on("click", function(e){
			e.preventDefault();
			var $this = $(this),
				linkCopy = $this.text(); // copy of link that has been clicked on


			// $this.eq();


			// console.log($this.eq());


			// console.log(linkCopy);
			// $( "div.tab-" + trim(linkCopy)).hide();



		});



	})();
});