// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render(path.join(__dirname + "/../views/index.handlebars"));
  });

   // user route loads user.handlebars
  app.get("/user", function(req, res) {
    res.render(path.join(__dirname + "/../views/user.handlebars"));
  });

  app.get("/createCard", function(req, res) {
    res.render(path.join(__dirname + "/../views/update.handlebars"));
  });

  app.get("/nsfw", function(req, res) {
      res.render(path.join(__dirname + "/../views/NSFW.handlebars"));
    });

  app.get("/sfw", function(req, res) {
      res.render(path.join(__dirname + "/../views/SFW.handlebars"));
    });
  
  // If no matching route is found default to home
  app.use(function(req, res) {
      res.render(path.join(__dirname, "/../views/index.handlebars"));
    });

};