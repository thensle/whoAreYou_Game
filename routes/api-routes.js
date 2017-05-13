// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var User = require("../models/user.js");
var Sequelize = require("sequelize");

console.log(Object.keys(db));
// Routes
// =============================================================
module.exports = function(app) {

//All Questions API Call
  app.get("/api/questions", function(req, res) {
     db.Questions.findAll({}).then(function(dbQuestions){
         res.json(dbQuestions);
     })
 });

//All Users API Call
  app.get("/api/users", function(req, res) {
     db.users.findAll({}).then(function(dbUsers){
          console.log(dbUsers);
         res.json(dbUsers);
     })
 });

  // GET NSFW route 
  app.get("/nsfw", function(req, res) {
  	db.Questions.findAll({
      limit: 1,
      order: [
        [Sequelize.fn('RAND')]
      ],
        where: {
          sfw: false
        } 
    }).then(function(dbQuestions){
  	res.json(dbQuestions); 
  	})
  });

  //  // GET SFW route 
  app.get("/sfw", function(req, res) {
    db.Questions.findAll({
      limit: 1,
      order: [
        [Sequelize.fn('RAND')]
      ],
        where: {
          sfw: true
        } 
    }).then(function(dbQuestions){
    res.json(dbQuestions); 
    })
  });

  app.post("/api/addQuestion", function(req,res){
  	db.Questions.create({
  		question: req.body.newQuestion, 
  		sfw: req.body.newSfw
  	}).then(function(dbQuestions){
  		res.json(dbQuestions); 
  	})
  })

  app.post("/api/newUser", function(req,res){
    db.Users.create({
      email: req.body.userEmail, 
      password: "random password"
    }).then(function(dbQuestions){
      res.json(dbUsers);
    })
  })

  app.delete("/api/questions/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Questions.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });

  });
};

