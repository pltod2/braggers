var github = require('../../integration/github');

module.exports = function (element, callback) {
    function user(slackId, slackUsername, slackEmail) {
        this.slackId = slackId;
        this.slackUsername = slackUsername;
        this.slackEmail = slackEmail;
    }

    var currentUser = new user(element.id, element.name, element.profile.email);
    currentUser.firstName = element.profile.first_name;
    currentUser.lastName = element.profile.last_name;
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