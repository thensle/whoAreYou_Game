$(document).ready(function() {
	// AJAX call to get "Not safe for work" questions
	$("#nsfw-next").on("click", function(event) {
	
		$.ajax({
            url: "api/nsfw",
            method: 'GET'
        }).then(function(response) {
            $(".modal-body").text(response[0].question);

        });
	})

	// AJAX call to get "Safe for Work" questions
	$("#sfw-next").on("click", function(event) {
	
		$.ajax({
            url: "api/sfw",
            method: 'GET'
        }).then(function(response) {
            $(".modal-body").text(response[0].question);
        });
	})


});


	
