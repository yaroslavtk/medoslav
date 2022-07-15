$('.responsive').slick({
	dots: true,
	infinite: true,
	speed: 100,
	slidesToShow: 3,
	slidesToScroll: 3,
	touchThreshold: 10,
	waitForAnimate: false,
	responsive: [
	  {
		breakpoint: 1180,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2.1,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 767,
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
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	touchThreshold: 10,
	waitForAnimate: false,
	responsive: [
		{
		  breakpoint: 1180,
		  settings: {
			slidesToShow: 8,
			slidesToScroll: 8
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		}
	]
  });
  