// =============================================================
// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
// var User = require("../models/user.js");
var Sequelize = require("sequelize");

// =============================================================
// Routes
// =============================================================

module.exports = function(app) {
  
    // All Questions
    app.get("/api/questions", function(req, res) {
        db.Questions.findAll({}).then(function(dbQuestions){
           res.json(dbQuestions);
        })
    });

    // All User Questions
    app.get("/api/userQuestions", function(req, res) {
        db.userQuestions.findAll({}).then(function(dbQuestions){
            res.json(dbQuestions);
        })
    });

    // All Users 
    app.get("/api/users", function(req, res) {
        db.Users.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
        })
    });

    // 1 Random SFW Questions
    app.get("/api/nsfw", function(req, res) {

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

 
    // 1 Random SFW Questions
    app.get("/api/sfw", function(req, res) {
        db.userQuestions.findAll({
            limit: 1,
            order: [
                [Sequelize.fn('RAND')]
            ],
            where: {
                sfw: true,
                // userId: req.params.id ??
            }
        }).then(function(dbQuestions){
            res.json(dbQuestions); 
        })
    });


    // Add New Questions
    app.post("/api/addQuestion", function(req,res){
        // console.log(req.body);
    	db.Questions.create({
    		question: req.body.newQuestion, 
    		sfw: req.body.newSfw
    	}).then(function(dbQuestions){  
    		res.json(dbQuestions); 
    	})
    })


    // Delete User Question
    app.delete("api/Questions/:id", function(req, res) {
    // We just have to specify which question we want to destroy with "where"
        console.log(req.params.id);
        db.Questions.destroy({
            where: {
                id: req.params.id

                // this may need to have the userID somewhere here?
            }
        }).then(function(dbQuestions) {
            // console.log(req.params.id);
            res.json(dbQuestions);
        });
    });


    app.put("/api/userQuestions/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    // console.log("/api/userQuestions/" + req.params.id);
    // console.log("req id " + req.body.id);
    // console.log("req question " + req.body.editQuestion);
    // console.log("req sfw " + req.body.editSfw);
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
            res.redirect(dbQuestions.dataValues.UserId+"/update");
        });
    });

    //After user is validated
    app.post("/newUser", function(req, res){
        db.Users.create({
            email: req.body.userEmail, 
            password: req.body.userPassword
        }).then(function(newUser){
            //res.json(newUser);  
            res.redirect("/game");
            createQuestions(newUser);
        })
    });
    // For After Validation
    function createQuestions(newUser){
        db.Questions.findAll({}).then(function(dbQuestions){

          var templateQuestions = dbQuestions;
          var id = newUser.id;

          var question_text = [];
          var question_sfw = [];

          for (var i = 0; i < templateQuestions.length; i++){
            
            question_text.push(templateQuestions[i].dataValues.question);
            question_sfw.push(templateQuestions[i].dataValues.sfw);
          };

          console.log("this is the length of the template array" + templateQuestions.length);

          var instances = [];
          

            for (var i = 0; i < templateQuestions.length; i++){
              var instance = {};

                instance = {
                  
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
