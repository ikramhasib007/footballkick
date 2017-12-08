/*jshint esversion: 6*/

module.exports = function(_, passport){
	'use strict';
	return {
		SetRouting: function(router){
			router.get('/', this.indexPage);
			router.get('/signup', this.signupPage);
			router.get('/home', this.homePage);
			




			router.post('/signup', this.postSignup);
		},

		indexPage: function(req, res){
			return res.render('index');
		},

		signupPage: function(req, res){
			return res.render('signup');
		},

		postSignup: passport.authenticate('local.signup', {
			successRedirect: '/home',
			failureRedirect: '/signup',
			failureFlash: true
		}),

		homePage: function(req, res){
			return res.render('home');
		}
	};
};