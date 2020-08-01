/*>>>>>>>>>JQUERY CODE GOES HERE<<<<<<<<<<*/

$(document).ready(function() {
   //add smooth scrolling to all links
    $("a").on('click', function(event) {
        //make sure this.hash has a value before overriding default behavior
        if(this.hash !== "") {
            //Prevent default anchor click behavior
            event.preventDefault();
            
            //store hash
            var hash = this.hash;
            
            //using jquery animate() method
            $('html, body').animate({
                scrollTop: $(hash). offset().top}, 800, function(){
                //ad hash(#) to url when done scrolling (default click behavior)
                window.location.hash = hash;
            })
        }
    });    
});

(function($) {
    $('table tr:even').css('background-color', 'rgba(128, 0, 11, 0.2)');
    $('table tr:odd').css('background-color', 'rgba(128, 0, 11, 0.13)');

var $window = $(window), 
        $body = $('body'),
		$main_body = $('#main-body'),
		$panels = $main_body.children('.panel'),
		$wrapper_nav = $('#wrapper-nav'), 
        $wrapper_nav_a = $wrapper_nav.children('a');

	// Nav.
		$wrapper_nav_a.on('click', function(event) {
				var href = $(this).attr('href');
				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;
				// Prevent default.
					event.preventDefault();
					event.stopPropagation();
				// Switch Sections or Panels.
					if (window.location.hash != href){
						window.location.hash = href;
                    }
			});

	// Panels.

		// Initialize.
			(function() {
				var $panel, $link;
				// Get panel, link.
					if (window.location.hash) {
				 		$panel = $panels.filter(window.location.hash);
						$link = $wrapper_nav_a.filter('[href="' + window.location.hash + '"]');
					}
                //set link and panel to first if none exist
					if (!$panel
					||	$panel.length == 0) {
						$panel = $panels.first();
						$link = $wrapper_nav_a.first();
					}

				//Hide all panel except set panel
					$panels.not($panel).addClass('inactive').hide();

				// make link active
					$link.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {
				var $panel, $link;
				// get panel and link.
					if (window.location.hash) {
				 		$panel = $panels.filter(window.location.hash);
						$link = $wrapper_nav_a.filter('[href="' + window.location.hash + '"]');

                        // No target panel? Bail.
							if ($panel.length == 0)
								return;
					}

				// No panel/link? Default to first.
					else {
						$panel = $panels.first();
						$link = $wrapper_nav_a.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$wrapper_nav_a.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main_body
						.css('max-height', $main_body.height() + 'px')
						.css('min-height', $main_body.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main_body.css('max-height', $panel.outerHeight() + 'px').css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {
								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main_body.css('max-height', '').css('min-height', '');
                                
                                    $window.on('resize', function(event) {
                                        $main_body.css('min-height', $panel.height() + 22 + 'px').css('max-height', $panel.height() + 22 + 'px');
								// IE: Refresh.
									$window.triggerHandler('--refresh');
							});

					}, 0);
			}, 100);
    })
    //deactivate scroll
    $wrapper_nav_a.on('click', function() {
        $windw.scrollTop(0);
    })

})($);

/*>>>>>>>>>>VANILLA JS CODE GOES HERE<<<<<<<<*/ 

