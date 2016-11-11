var WebClient = require('@slack/client').WebClient;
var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var token = process.env.SLACK_API_TOKEN || '';
var rtm = new RtmClient(token);
var web = new WebClient(token);

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

rtm.start();

rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
  rtm.sendMessage("Hello!", 'C2YDFNCHG');
});

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  if(message.text === 'getAllUsers'){
      web.users.list(function userListCb(err, response) {
      if (err) return console.log('Error:', err);
      for(let user of response.members){
        //console.log(user)
        console.log('username: ' + user.name);
        console.log('email: ' + user.profile.email + '\n');
        }
      })

      rtm.sendMessage("Users extracted!", message.channel)
  }
});