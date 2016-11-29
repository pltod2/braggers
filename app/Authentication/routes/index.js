var express = require('express');
var router = express.Router();
var passwordless = require('passwordless');


router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});


router.get('/restricted', passwordless.restricted(),
 function(req, res) {
  res.render('restricted', { user: req.user });
});


router.get('/login', function(req, res) {
  res.render('login', { user: req.user });
});


router.get('/logout', passwordless.logout(),
	function(req, res) {
  res.redirect('/');
});

var users = [{id:1, email: 'alex@gmail.com'}, //just for testing
             {id:2, email: 'test@gmail.com'}];

router.post('/sendtoken', 
	passwordless.requestToken(
		function(user, delivery, callback) {
			for(var i = 0; i < users.length;i++){
          if(users[i].email === user){
            return callback(null, users[i].id)
          }
      }
      callback(null,null);
		}),
	function(req, res) {
  		res.render('sent');
});

module.exports = router;