var slack = require('../../integration/slack');
var github = require('../../integration/github');
var db = require('../../integration/loki')({
    location: 'app/service/db/braggers.json',
    existing: true
});
var githubInfoParser = require('./githubInfoParser');

function updateDatabase(saveUser) {
    exportUsers();

    function exportUsers() {
        slack.users(checkForNewUsers);
    }

    function checkForNewUsers(data) {
        var slackUserInfo = data;
        var filteredUserArr = data.members.filter(isNotABot);
        filteredUserArr.forEach(chechIfUserIsNew);

        function isNotABot(user) {
            if (user.is_bot || user.profile.email === undefined) {
                return false;
            } else {
                return true;
            }
        }
    }

    function chechIfUserIsNew(userInfo) {
        var data = userInfo;
        db.findUserBySlackId(userInfo.id, addUserToDb);

        function addUserToDb(response){
            //console.log(response);
            if(response == null){
                githubInfoParser(data, saveUser);
            }
        }
    }
}

updateDatabase(db.updateCollectionWithNewUsers);