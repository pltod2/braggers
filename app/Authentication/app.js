var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var passwordless = require('passwordless');
var LokiJSStore = require('passwordless-lokijsstore');
var nodemailer   = require('nodemailer');
var routes = require('./routes/index');
var smtpTransport = require("nodemailer-smtp-transport");

var app = express();

// nodemailer settings
var transporter = nodemailer.createTransport(smtpTransport({
   service: "Gmail", 
   auth: {
       user: "user@gmail.com",
       pass: "password"
   }
}));

var host = 'http://localhost:3000/';

// passwordless settings
passwordless.init(new LokiJSStore('tokens.json'));
passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
           transporter.sendMail({
            text:    'Hello!\n You can access your account here: http://' 
            + host + '?token=' + tokenToSend + '&uid=' 
            + encodeURIComponent(uidToSend), 
            from:    "projectbraggers@gmail.com", 
            to:      "anotheruser@gmail.com", //just for testing
            subject: 'Successful registration in Braggers'
        }, function(err, response) { 
            if(err) {
                console.log(err);
            }
            console.log("Message sent: " + response.message);
            transporter.close();
          });
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({secret: '42', saveUninitialized: false, resave: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({ successRedirect: '/' }));

app.use('/', routes);
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
