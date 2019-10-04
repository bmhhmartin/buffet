(function ($) {
 "use strict";
 
/* ---------- Main-carousel js--------------------------- */
      $("#main-carousel").owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem : true,
		  autoPlay:5000
      });	  
/* ---------- testimonial-carousel js--------------------------- */
	  $("#testimonial-carousel").owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem : true
      });	  
/* ---------- blog-carousel js--------------------------- */
	  $("#blog-carousel").owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem : true,
		  autoPlay:5000
      });
/* ---------- One page nav js --------------------------- */	  
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
/* ---------- parallax js --------------------------- */	
	jQuery(window).stellar();
/* ---------- toggle js --------------------------- */	
	$(".icon-togol").click(function() {
		$("#nav").slideToggle();
	});
/* ---------- sticky js --------------------------- */	
     $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$(".sticker").removeClass("scroll-header");
	   }else{
		$(".sticker").addClass("scroll-header");
	   }
	  });
/*------------------------ Video background ---------------------------*/
	$(".bg-video").vide('video/r');	
/*------------------------ preloader ---------------------------*/
		$(window).on('load',function(){
			$('#preloader').fadeOut('slow',function(){$(this).remove();});
		})
/*------------------------ Color picker ---------------------------*/		
		$('.move').click(function(){
			$('.move').hide();
			$('.color-picker').addClass('cmovel');
			$('.color-picker').removeClass('cmover');
		});
		$('.cclose').click(function(){
			$('.move').show();
			$('.color-picker').addClass('cmover');
			$('.color-picker').removeClass('cmovel');
		});
		
		$('.green').click(function(){
			$('.bg-color').addClass('green');
			$('.bg-color').removeClass('yellow');
			$('.bg-color').removeClass('blue');
			$('.bg-color').removeClass('blacks');
		});
		$('.yellow').click(function(){
			$('.bg-color').addClass('yellow');
			$('.bg-color').removeClass('green');
			$('.bg-color').removeClass('blue');
			$('.bg-color').removeClass('blacks');
		});
		$('.blue').click(function(){
			$('.bg-color').addClass('blue');
			$('.bg-color').removeClass('yellow');
			$('.bg-color').removeClass('green');
			$('.bg-color').removeClass('blacks');
		});
		$('.blacks').click(function(){
			$('.bg-color').addClass('blacks');
			$('.bg-color').removeClass('yellow');
			$('.bg-color').removeClass('blue');
			$('.bg-color').removeClass('green');
		});
/*------------------------ Wow js---------------------------*/	
		 new WOW().init();
/*-------------------------------------- scrollUp ---------------------------------*/
		$.scrollUp({
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  });
})(jQuery); 


	