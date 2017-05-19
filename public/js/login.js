$(document).ready(function() {
  var loginForm = $(".createUserForm");
  var email = $(".userEmailClass");
  // var passwordInput =

  // When the form is submitted, validate email
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: email.val().trim(),
      // password: passwordInput.val().trim()
    };

    if (!userData.email) {
      return;
    }

    if (userData.email.includes("@") === false) {
      return;
      //Need an error message to alert to user
    }

    //Call function to post to database, clear the HTML fields
    loginUser(userData.email);
    emailInput.val("");
  });

  //Make this post call once email is validated as unique and new in the users
  //table in the database
  function createUser(email) {
    $.post("/api/users", {
      email: email
    }).then(function(data) {
      createQuestions(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  };



});