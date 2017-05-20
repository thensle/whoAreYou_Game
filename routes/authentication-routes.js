// Requiring our models
var db = require("../models");
var User = require("../models/user.js");
var Sequelize = require("sequelize");

////

app.post("/manage", function(req, res){
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