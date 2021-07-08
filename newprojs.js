/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



  const typed = new Typed('.textlive', {
  strings: ['Online Payment.',
			'Emergency.',
			'24hour Online Help.',
			'Best Service.'
			],
              typeSpeed: 50,
			  backSpeed: 50,
			  backDelay: 1500,
			  loop: true,
});



new WOW().init();