var WebClient = require('@slack/client').WebClient;
var tokens = require(('../../../tokens.js'));
if (!tokens.slack.token) {
  console.log('Please specify your token!')
}
var web = new WebClient(tokens.slack.token);

module.exports = {
  users: users
}

function users(callback) {
  web.users.list(
    function(err, response) {
      if (err) return console.log('Error:', err);
      callback(response);
    }
  )
}