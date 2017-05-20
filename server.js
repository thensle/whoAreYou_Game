// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("handlebars");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var env = require('dotenv').load();
var session = require('express-session');
var passport = require('passport');

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(methodOverride("_method"));
// Set Handlebars as the default templating engine.

var hbs = exphbs.create({
	defaultLayout: "main",
	partialsDir: [
		"views/partials/"]
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================
// Passport
// ============================================================

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// =============================================================
// Routes
// ============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/authRoutes.js")(app, passport);
require('./config/passport/passport.js')(passport, db.Users);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
