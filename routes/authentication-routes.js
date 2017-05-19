// Requiring our models
var db = require("../models");
var User = require("../models/user.js");
var Sequelize = require("sequelize");

//Global Variables
var templateQuestions = [];

//Run this code after confirmation of new user created...

app.get("/create", function(req, res) {
 db.Questions.findAll({}).then(function(dbQuestions){
     templateQuestions = JSON.stringify(dbQuestions);
 })
});

app.post("/:id/manage", function(req, res){
	db.users.findOne({ 
		where: {
			id: req.user.id
		},
	}).then(function(data){

	})
});

// GET route for getting all of the posts
  app.get("/api/users/questions", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.author_id;
    }
    // 1. Add a join here to include all of the Authors to these posts
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });