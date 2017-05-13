$(document).ready(function() {
  var loginForm = $(".signInForm");
  var email = $(".userEmailClass");
  // var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: email.val().trim(),
      // password: passwordInput.val().trim()
    };

    if (!userData.email) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email);
    emailInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});