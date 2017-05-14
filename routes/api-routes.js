// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var Sequelize = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {
  
  // GET route
  app.get("/api/questions", function(req, res) {
       db.Questions.findAll({}).then(function(dbQuestions){
           res.json(dbQuestions);
       })
  });

  // GET, 1 NSFW card at random, route 
  app.get("/nsfw", function(req, res) {
    // creating a handlebars object
    var hbsObject = {
      quesObj: data
    };
    console.log(hbsObject)

  	db.Questions.findAll({
      limit: 1,
      order: [
        [Sequelize.fn('RAND')]
      ],
        where: {
          sfw: false
        } 
    }).then(function(dbQuestions){
      res.render("nsfw", hbsObject); 
  	})
  });


  // GET, 1 SFW card at random, route 
  app.post("/sfw", function(req, res) {
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

