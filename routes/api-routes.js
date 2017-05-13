// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route 
  app.get("/api/questions", function(req, res) {
  	db.Questions.findAll({}).then(function(dbQuestions){
  		res.json(dbQuestions); 
  	})
  });

  // app.get("/api/nextQuestion", function(req, res) {
  //   db.Questions.findOne({

  //   }).then(function(dbQuestions){
  //     res.json(dbQuestions)
  //   })
  // });

  app.post("/api/addQuestion", function(req,res){
  	db.Questions.create({
  		question: req.body.newQuestion, 
  		sfw: req.body.newSfw
  	}).then(function(dbQuestions){
  		res.json(dbQuestions); 
  	})
  })

  app.delete("/api/questions/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where" 
    // Liam says: I like how you left the comment of todo here.
    db.Questions.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });

  });

  // app.  

};

