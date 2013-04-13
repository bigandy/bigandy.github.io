(function(){ 
	
	$("button").on("click", function() {
		// console.log("button was clicked!");

		var $this = $(this),
			stylesheet = $this.data('css');

			$this
				.siblings('button')
					.removeAttr('disabled')
					.end()
				.attr('disabled', 'disabled');

	});

})();