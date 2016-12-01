var getJSON = require("get-json");

module.exports = function (username, cb1, cb2) {
  var url = 'https://medium.com/@' + username + '/latest?format=json';

  getJSON(url, function (error, response) {
    if (error) return cb1(error);

    var author;

    try {
      response = response.slice(16);
      author = JSON.parse(response).payload;
      var postsObj = author.references.Post;
      var postsUrls = [];
      for (var key in postsObj) {
        var postUrl = `http://medium.com/${author.user.username}/` + postsObj[key].id;
        postsUrls.push(postUrl);
      }
    } catch (err) {
      return cb1(err);
    }

    cb1(postsUrls, cb2);
  });
}