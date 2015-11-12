// Custom JS
$(document).ready(function(){
	
  // Add your code here

  //.........................................................................Smooth Scroll
   	$(document).ready(function() {
 	$('.scrollTo').click( function() { // Au clic sur un élément
 	var page = $(this).attr('href'); // Page cible
 	var speed = 750; // Durée de l'animation (en ms)
 	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 	return false;
 	});
 	});

 //.........................................................................Pop Over
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
	});

 //.........................................................................Dico Accords Gad

	$(document).ready(function() {
		$("#go").click(function(event) {
			//console.log($( "#accord").val(),$( "#minmaj").val(),$( "#dim").val());
			var src = $("#accord").val() + $("#minmaj").val() + $("#dim").val() + ".jpg";
			console.log(src);
			//$("#output").attr('src', src.toLowerCase()).fadeIn(1500);
			$("#output").fadeOut(500, function() {
	        	$("#output").attr("src", "img/accord/" + src.toLowerCase());
	    	}).fadeIn(1800);
		});
	});




});
