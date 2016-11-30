const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//Inject our functionality ... it could be reused into other containers
require('../../app/service/api')((api) => {

  app.get('/getUsers', function (req, res) {
    console.log(api);
    res.send(api.getUsers());
  });

  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
  });

});

