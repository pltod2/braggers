const express = require('express');
const app = express();

//This could be any other datasource even remote call
const db = require('../../db/db.json');

//THE APP
// const braggers = require('../../config/braggers');

// app.get('/getAllUsers', function (req, res) {
//   braggers.getAllUsers(function(data) {
//     console.log(data.members.length)
//     res.send(data.members);
//   })
// });

app.get('/getUsers', function (req, res) {
  res.send(db.collections);
});

//app.use(express.static('static'));

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
