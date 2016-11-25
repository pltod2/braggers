const express = require('express');
const app = express();

//THE APP
const braggers = require('../../config/braggers');

app.get('/getAllUsers', function (req, res) {
  braggers.getAllUsers(function(data) {
    console.log(data.members.length)
    res.send(data.members);
  })
});

app.use(express.static('static'));

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
