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


 //.........................................................................Dico Accords Gad

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
        $(this).parents('.item').find('.more_text').append("<a href='#'class='read_less'>Read less</a>");
        $( ".read_less" ).bind( "click", function() {
        	event.preventDefault();
  		$(this).hide();
        $(this).parents('.item').find('.more_text').hide(); /* show the .more_text span */
        $(this).parents('.item').find('.read_more').fadeIn(
		'fast');
		});

		
    });


});
