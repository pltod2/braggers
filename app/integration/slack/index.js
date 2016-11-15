var WebClient = require('@slack/client').WebClient;
var tokens = require(('./tokens.js'));
var token = tokens.slackApiToken || '';
var web = new WebClient(token);

module.exports = {
  users: users
}

//TODO: Documentation tools
/**
 * Get all users from Slack.
 */
function users(callback) {
  web.users.list(
    function(err, response) {
      //TODO: Error Management 
      if (err) return console.log('Error:', err);
      callback(response);
    }
  )
}