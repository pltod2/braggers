var fs = require("fs");
var chalk = require('chalk');

module.exports = {
    readSlackUsers : function(callback){
        fs.readFile("slackUsers.txt", function (err, data){
            if (err) {
                return console.error(err);
            }
            callback(data)
        })
    },

    writeSlackUsers : function (data){
        fs.writeFile('slackUsers.json', JSON.stringify(data), function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(chalk.magenta("Users data extracted successfully!"));
            });
    },

    writeGithubUsers : function (data){
        fs.writeFile('githubUserInfo.json', JSON.stringify(data), function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(chalk.magenta("Users data extracted successfully!"));
            });
    },

    addUsersToFile : function(data){
        if(data.length === 0){
            console.log(chalk.magenta("No users found."));
        } else{
            fs.appendFile('usersInfo.json', JSON.stringify(data), function (err) {
            if (err) {
                console.log("Error:" + err);
            }
            console.log(chalk.magenta("User data extracted successfully!"));
        });
        }
    }
}