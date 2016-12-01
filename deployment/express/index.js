const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const endpoints = require('../../api/endpoints');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));  
app.use(cors());

//Inject our functionality ... it could be reused into other containers
require('../../api')((api) => {

  app.get('/' + endpoints.getUsersEndpoint, function (req, res) {
    res.send(api.getUsers());
  });

  app.get('/' + endpoints.getUserByIdEndpoint, function (req, res) {
    res.send(api.getUserById(req.params.userId));
  });

  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
  });

});

