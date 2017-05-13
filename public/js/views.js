$(document).ready(function() {
	console.log('Beginning');

	$(document).on("click", "#sfw-next", getSFW);
	});


	function getSFW(){
	  $.get("/sfw", function(data){
	    console.log(data);
  })

}