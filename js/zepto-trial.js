// lets pull in zeptojs

// var script = document.createElement('script');

// var mySrc = ('__proto__' in {} ? '/js/libs/zeptojs/src/zepto.js' : '/js/libs/jquery/jquery.min.js')
// 	script.src = mySrc;

// document.head.appendChild(script);

// Zepto(function($){
//   alert('Ready to Zepto!')
// });



yepnope({
  test: navigator.appName.match(/Explorer/), // IE?
  yep: '/js/libs/jquery/jquery.min.js',
  nope: '/js/libs/zeptojs/src/zepto.js'
});

Zepto(document).ready(function() {
  // Handler for .ready() called.
  console.log("hi five!");
});


(function(){ 
	$("h1").addClass("heavy");
})();