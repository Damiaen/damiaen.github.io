(function($) {
	"use strict"

	$(window).on('load', function() {
		$("#preloader").delay(400).fadeOut();
	});

	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
		wScroll > 900 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

})(jQuery);

function openProject(path) {
	window.open(path, '_blank');
}
