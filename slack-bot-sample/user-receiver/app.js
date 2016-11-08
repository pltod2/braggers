var bodyParser =require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

app.post('/api/users', function(req, res) {
	console.dir(req.body);
	res.sendStatus(200);
});

app.listen(7000, function() {
	console.log('Server listens on port 7000!');
});