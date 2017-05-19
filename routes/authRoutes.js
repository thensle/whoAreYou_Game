var path = require("path");

module.exports = function(app, passport) {
	app.get('/signup', function(req, res) {
		res.render('signup');
	});

	// app.get('/signin', function(req, res) {
	// 	res.render('signin');
	// });

	app.get('/userDashboard', isLoggedIn, function(req, res) {
		res.render(path.join(__dirname + "./../views/userDashboard.handlebars"));
	});

	app.get('/logout', function(req, res) {
		req.session.destroy(function(err) {
			res.redirect('/');
		})
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/userDashboard',
		failureRedirect: '/'
	}));

	// app.post('/signin', passport.authenticate('local-signin', {
	// 		successRedirect: '/userDashboard',
	// 		failureRedirect: '/signin'
	// 	}
	// ));

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect(':id/game');
	}
};
