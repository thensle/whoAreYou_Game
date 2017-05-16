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
  
  // GET route
  app.get("/api/questions", function(req, res) {
       db.Questions.findAll({}).then(function(dbQuestions){
           res.json(dbQuestions);
       })
  });

//All Users API Call
  app.get("/api/users", function(req, res) {
     db.users.findAll({}).then(function(dbUsers){
         res.json(dbUsers);
     })
 });

  // GET NSFW route 
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

//After user is validated
  app.post("/newUser", function(req, res){
    db.Users.create({
      email: req.body.userEmail, 
      password: req.body.userPassword
    }).then(function(newUser){
      res.json(newUser);
      createQuestions(newUser);
    })
  });

 function createQuestions(newUser){
    db.Questions.findAll({}).then(function(dbQuestions){

      var templateQuestions = dbQuestions;
      var id = newUser.id;

      // var question_id = [];
      var question_text = [];
      var question_sfw = [];



      for (var i = 0; i < templateQuestions.length; i++){
        // question_id.push(templateQuestions[i].dataValues.id);
        question_text.push(templateQuestions[i].dataValues.question);
        question_sfw.push(templateQuestions[i].dataValues.sfw);
      };

      console.log("this is the length of the template array" + templateQuestions.length);

      var instances = [];
      

        for (var i = 0; i < templateQuestions.length; i++){
          var instance = {};

            instance = {
              // id: question_id[i], 
              question: question_text[i], 
              sfw: question_sfw[i], 
              UserId: id
            };

            instances.push(instance);
          };

      db.userQuestions.bulkCreate(instances).then(function(){
        return db.userQuestions.findAll();
      });
    });
 

 };
};

 //Login an existing user

 // app.post("/login", function(req,res){
 //    var userEmail = req.body.userEmail;
 //    var userPassword = req.body.userPassword;


 //    }).then(function(data){
 //      app.redirect(/)
 //    })
 //  });