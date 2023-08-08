$(window).on("load ",function(){
	var scroll = $(window).scrollTop();
	var topHeading = $('h1.w-text.banner-title')
	var bottomHeading = $('h1.w-text.banner-title-2')
	var elementOffset1 = topHeading.offset().top;
	var elementOffset2 = bottomHeading.offset().top;
	var diffBetweenHaedings = elementOffset2 - elementOffset1
	var el2 = elementOffset2-diffBetweenHaedings

	topHeading.css({transform: 'translate3d(0%, ' + (scroll) + 'px, 0)',});
  bottomHeading.css({transform: 'translate3d(0%, ' + (scroll-diffBetweenHaedings) + 'px, 0)',});
	
	$("h1.w-text.banner-title-2").css({opacity: '0',});
    $(window).on("scroll",function () {
		 $("h1.w-text.banner-title-2").css({opacity: '1',});
		scroll = $(window).scrollTop();
		diffBetweenHaedings = elementOffset2 - elementOffset1
		 el2 = elementOffset2-diffBetweenHaedings
    if (scroll <= diffBetweenHaedings && el2 <= elementOffset1){
	 
      $("h1.w-text.banner-title").css({transform: 'translate3d(0%, ' + (scroll) + 'px, 0)',});
      $("h1.w-text.banner-title-2").css({transform: 'translate3d(0%, ' + (scroll-diffBetweenHaedings) + 'px, 0)',});
		
    }
    });
  });

	
	
