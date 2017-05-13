// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET NSFW route 
  app.get("/api/questions/nsfw", function(req, res) {
  	db.Questions.findOne({
      random: false,
      limit: 1,
      offset: 20,
        where: {
          sfw: false
        } 
    }).then(function(dbQuestions){
  	res.json(dbQuestions); 
  	})
  });

  //  // GET SFW route 
  // app.get("/api/questions/nsfw", function(req, res) {
  //   db.Questions.findOne({
  //     random: false,
  //     limit: 1,
  //     offset: 20,
  //       where: {
  //         sfw: true
  //       } 
  //   }).then(function(dbQuestions){
  //   res.json(dbQuestions); 
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
    db.Questions.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });

  });
};

