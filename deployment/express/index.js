const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));  
app.use(cors());

//Inject our functionality ... it could be reused into other containers
require('../../api')((api) => {

  app.get('/getUsers', function (req, res) {
    console.log(api);
    res.send(api.getUsers());
  });

  app.post('/getUsersById', function (req, res) {
    console.log(req);
    //res.send(api.getUsers());
    res.send('OK');
  });

  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
  });

});

