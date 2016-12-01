const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const endpoints = require('../../api/endpoints');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passwordless = require('passwordless');
const LokiJSStore = require('passwordless-lokijsstore');
const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");
const tokens = require('../../../tokens');

//nodemailer settings
const transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    debug: true,
    auth: {
        user: tokens.gmail.user,
        pass: tokens.gmail.pass
    }
}));
const host = 'http://localhost:3000/';
const users = [{ id: 1, email: 'ptodorov@axway.com' }, { id: 2, email: 'test@gmail.com' }];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(expressSession({ secret: '42', saveUninitialized: false, resave: false }));
app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({ successRedirect: '/' }));


// passwordless settings
passwordless.init(new LokiJSStore('tokens.json'));
passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
        transporter.sendMail({
            text: 'Hello!\n You can access your account here: ' + host + '?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend),
            from: tokens.gmail.user,
            to: tokens.gmail.testReciever,
            subject: 'Your access to Braggers'
        }, function(err, response) {
            if (err) {
                console.log(err);
            }
            transporter.close();
        });
    });

//Inject our functionality ... it could be reused into other containers
require('../../api')((api) => {

    app.get('/' + endpoints.getUsersEndpoint, function(req, res) {
        res.send(api.getUsers());
    });

    app.get('/' + endpoints.getUserByIdEndpoint, function(req, res) {
        res.send(api.getUserById(req.params.userId));
    });

    app.get('/' + endpoints.restrictedEndpoint, passwordless.restricted(), function(req, res) {
        
        res.send('OK');
    });

    app.get('/' + endpoints.getTokenEnpoint,
        passwordless.requestToken(
            function(user, delivery, callback) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].email === user) {
                        return callback(null, users[i].id)
                    }
                }
                callback(null, null);
            }),
        function(req, res) {
            res.render('sent');
        }
    );

    app.listen(8000, function() {
        console.log('Example app listening on port 8000!');
    });

});
