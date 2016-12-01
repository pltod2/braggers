var slack = require('../../integration/slack');
var github = require('../../integration/github');
var writer = require('./reader-writer');
var githubInfoParser = require('./githubInfoParser');

require('../../integration/loki')({
    location: 'db/braggers.json',
    existing: false,
    callback: execute
});

function execute(db) {
    slack.users(processSlackData);

    function processSlackData(data) {
        var filteredUserArr = data.members.filter(isNotABot);
        filteredUserArr.forEach(getGithubInfoAndParse);
    }

    function isNotABot(user) {
        if (user.is_bot || user.profile.email === undefined) {
            return false;
        } else {
            return true;
        }
    }

    function getGithubInfoAndParse(user){
        githubInfoParser(user, db.insertUser);
    }
}