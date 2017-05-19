// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

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

  app.get("/edit/:id", function(req, res) {
    db.userQuestions.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestion) {
      // console.log("full dbQuestion in edit route is ", dbQuestion)
      // console.log("dbQuestion in edit route ", dbQuestion.id);
      res.render(path.join(__dirname + "/../views/edit.handlebars"), { userQuestions: dbQuestion });
    })
  });

  app.get("/createCard", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.userQuestions.findAll({
    }).then(function(dbQuestions) {
      res.render(path.join(__dirname + "/../views/update.handlebars"), { userQuestions: dbQuestions });
    })
  });

  app.get("/nsfw", function(req, res) {
      res.render(path.join(__dirname + "/../views/NSFW.handlebars"));
    });

  app.get("/sfw", function(req, res) {
      res.render(path.join(__dirname + "/../views/SFW.handlebars"));
    });

   // user route loads user.handlebars
  app.get("/login", function(req, res) {
    res.render(path.join(__dirname + "/../views/login.handlebars"));
  });

};
