jQuery(document).ready(function(){
	jQuery(".hm-search-button-icon").on( "click", function() {
		jQuery(".hm-search-box-container").toggle('fast');
		jQuery(this).toggleClass("hm-search-close");
	});
});

jQuery(document).ready(function(){

	if ( typeof jQuery.fn.magnificPopup === "undefined" ) {
		return;
	}

	jQuery('.image-link').magnificPopup({
		type: 'image'
	});
});

/* Featured Slider */

jQuery(document).ready(function() {
	if ( typeof jQuery.fn.flexslider === "undefined" ) {
		return;
	}
	// The slider being synced must be initialized first
	jQuery('#hm-carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: true,
		itemWidth: 135,
		itemMargin: 10,
		asNavFor: '#hm-slider'
	});

	jQuery('#hm-slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: true,
		sync: "#hm-carousel"
	});
});


/* Link the whole slide to the link*/
(function($) {
	$('div.hm-slider-container').on( 'click', function(e) {
		if ( $(e.target).is('span.cat-links') ) { 
			return false;
		} else {
			window.location = $(this).data('loc');
		}
	});
})(jQuery);

/* Tabs Widget */
jQuery(document).ready( function() {
	if ( typeof jQuery.fn.tabs === "function" ) {
		jQuery( ".hm-tabs-wdt" ).tabs();
	}
});