// Custom JS
$(document).ready(function(){
	$(".more_text").hide();
  // Add your code here

  //.........................................................................Smooth Scroll

 	$('.scrollTo').click( function() { // Au clic sur un élément
	 	var page = $(this).attr('href'); // Page cible
	 	var speed = 750; // Durée de l'animation (en ms)
	 	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
	 	return false;
 	});


 //.........................................................................Pop Over

    $('[data-toggle="popover"]').popover(); 

 //.........................................................................Back to Top

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

 //.........................................................................Dico Accords 

		$("#go").click(function(event) {
			//console.log($( "#accord").val(),$( "#minmaj").val(),$( "#dim").val());
			var src = $("#accord").val() + $("#minmaj").val() + $("#dim").val() + ".jpg";
			console.log(src);
			//$("#output").attr('src', src.toLowerCase()).fadeIn(1500);
			$("#output").fadeOut(500, function() {
	        	$("#output").attr("src", "img/accord/" + src.toLowerCase());
	    	}).fadeIn(1800);
		});

 //.........................................................................More text		

$('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide();
        $(this).parents('.item').find('.more_text').fadeIn(1000); /* show the .more_text span */
        //GA
        $(this).parents('.item').find('.more_text').append(/*"<a href='#'class='read_less'>Read less</a>"*/);
        $( ".read_less" ).bind( "click", function() {
        	event.preventDefault();
  		$(this).hide();
        $(this).parents('.item').find('.more_text').hide(); /* show the .more_text span */
        $(this).parents('.item').find('.read_more').fadeIn(
		'fast');
		});

    });


 //.................................................................................Caption Hover Effect




( function( window ) {
  
  // for touch devices: add class cs-hover to the figures when touching the items
  if( Modernizr.touch ) {

    // classie.js https://github.com/desandro/classie/blob/master/classie.js
    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }

    [].slice.call( document.querySelectorAll( 'ul.grid > li > figure' ) ).forEach( function( el, i ) {
      el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
        e.stopPropagation();
      }, false );
      el.addEventListener( 'touchstart', function(e) {
        classie.toggle( this, 'cs-hover' );
      }, false );
    } );

  }

})( window );






});
