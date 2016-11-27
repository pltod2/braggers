var slack = require('./slack');
var github = require('./github');
var writer = require('./reader-writer');
var db = require('./database');
var githubInfoParser = require('./githubInfoParser');

function getAllUsers(callback) {

    function processSlackData(data) {
        var filteredUserArr = data.members.filter(isNotABot);
        //console.log(filteredUserArr);
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
        githubInfoParser(user, callback);
    }

    slack.users(processSlackData);
}

getAllUsers(db.insertUser);