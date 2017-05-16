// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var Sequelize = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {

  //All Questions API Call
  app.get("/api/questions", function(req, res) {
     db.Questions.findAll({}).then(function(dbQuestions){
         res.json(dbQuestions);
     })
 });

   app.get("/api/userQuestions", function(req, res) {
     db.userQuestions.findAll({}).then(function(dbQuestions){
         res.json(dbQuestions);
     })
 });

//All Users API Call
  app.get("/api/users", function(req, res) {
     db.Users.findAll({}).then(function(dbUsers){
         res.json(dbUsers);
     })
 });
  
  app.post("/api/addUsers", function(req, res) {
    db.Users.create({
      email: req.body.userEmailClass
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
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
    console.log(req.body);
  	db.Questions.create({
  		question: req.body.newQuestion, 
  		sfw: req.body.newSfw
  	}).then(function(dbQuestions){  
  		res.json(dbQuestions); 
  	})
  })

  app.put("/api/userQuestions/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    console.log("/api/userQuestions/" + req.params.id);
    console.log("req id " + req.body.id);
    console.log("req question " + req.body.editQuestion);
    console.log("req sfw " + req.body.editSfw);
    db.userQuestions.update(
      {
        question: req.body.editQuestion,
        sfw: req.body.editSfw
      },
      {
      where: {
        id: req.params.id
        // this may need to have the userID somewhere here?
      }
    }).then(function(dbQuestions) {
      res.redirect("/createCard");
    });
  });

  app.delete("/api/userQuestions/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.userQuestions.destroy({
      where: {
        id: req.params.id
        // this may need to have the userID somewhere here?
      }
    }).then(function(dbQuestions) {
      res.redirect("/createCard");
    });
  });
};

