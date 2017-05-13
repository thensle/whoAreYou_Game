$(document).ready(function() {
	
	var questions;

	$(document).on("click", "#sfw-next", postSFW);
	});

	function getSFW(){
	  $.get("/sfw", function(data){
	    console.log(data);
	    questions = data;
	  })

  	function postSFW(){
  		$.ajax({
  			method:"POST",
  			url: "/sfw",
  			data: question
  		}).done(function(){

  		})
  	}

}