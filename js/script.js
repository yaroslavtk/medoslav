$('.responsive').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	touchThreshold: 30,
	waitForAnimate: false,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

  $('.variable-width').slick({
	dots: true,
	infinite: true,
	speed: 100,
	slidesToShow: 2,
	slidesToScroll: 2,
	centerMode: false,
	variableWidth: true,
	infinite: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 3000,
	touchThreshold: 30,
	waitForAnimate: false
  });

  $('.autoplay').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000
  });

  $('.multiple-items').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: false,
	autoplay: true
  });

  $('.multiple-items_2').slick({
	infinite: true,
	slidesToShow: 8,
	slidesToScroll: 8,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
		  breakpoint: 1300,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		}
	]
  });
  