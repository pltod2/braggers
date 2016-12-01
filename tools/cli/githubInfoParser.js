var github = require('../../integration/github');

function User(slackId, slackUsername, slackEmail, smallImg, largeImg, fn, ln) {
    this.slackId = slackId;
    this.slackUsername = slackUsername;
    this.slackEmail = slackEmail;
    this.smallImg = smallImg;
    this.largeImg = largeImg;
    this.firstName = fn;
    this.lastName = ln;
}


module.exports = function (element, callback) {
    var currentUser = new User(element.id, element.name, element.profile.email, element.profile.image_32, element.profile.image_192, element.profile.first_name, element.profile.last_name);
    // currentUser.firstName = element.profile.first_name;
    // currentUser.lastName = element.profile.last_name;
    github.getUserByEmail(element.profile.email, processGithubData);

    function processGithubData(value) {

        if (value === undefined) {
            callback(currentUser);
        } else {
            currentUser.githubUsername = value.login;
            currentUser.githubAvatar = value.avatar_url;
            currentUser.location = value.location;
            github.getUserRepos(value.login, setUserRepos);
        }
    }

    function setUserRepos(data) {
        var repos = [];
        for (var repo of data) {
            var currentRepo = {};
            currentRepo.name = repo.name;
            currentRepo.url = repo.url;
            currentRepo.description = repo.description;
            currentRepo.language = repo.language;
            repos.push(currentRepo);
        }
        currentUser.githubRepos = repos;
        github.getUserFollowers(currentUser.githubUsername, setUserFollowers);
    }

    function setUserFollowers(data) {
        currentUser.githubFollowers = data.length;
        callback(currentUser);
    }
}