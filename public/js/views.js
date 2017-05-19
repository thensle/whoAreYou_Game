$(document).ready(function() {
	// AJAX call to get "Not safe for work" questions
	$("#nsfw-next").on("click", function(event) {
		$.ajax({
            url: "/api/nsfw",
            method: 'GET'
        }).then(function(response) {
            $(".nsfw-modal-body").text(response[0].question);

        });
	})

	// we need to 
	// AJAX call to get "Safe for Work" questions
	$("#sfw-next").on("click", function(event) {
		$.ajax({
            url: "/api/sfw",
            method: 'GET'
        }).then(function(response) {
	        $(".sfw-modal-body").text(response[0].question);
        });
        

	})

	function getTodos() {
    	$.get("/api/Questions", function(data) {
    	  console.log("Questions", data);
    	  todos = data;
    	  initializeRows();
    	});
	}
 
 $(document).on("click", "button.delete", deleteTodo);
  function deleteTodo() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/Questions/" + id
    })
    .done(function() {
      getTodos();
    });
  }


  // This function deletes a todo when the user clicks the delete button
  function deleteTodo() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/Questions/" + id
    })
    .done(function() {
      getTodos();
    });
  }

});





	
