var github = require('octonode');
var tokens = require(('./tokens.js'));
var client = github.client({
    username: tokens.githubUsername,
    password: tokens.githubPassword
});
var ghsearch = client.search();

module.exports = {
    getUserByEmail: function (userEmail, callback) {

        (function getUserInfo(userEmail, requestService) {
            ghsearch.users({
                q: userEmail + ' in:email',
                sort: 'created',
                order: 'asc'
            }, function (err, data, headers) {

                if (err) return console.log('Error:', err);

                requestService(data);
            })
        })(userEmail, requestService);

        function requestService(data) {
            //console.log(data);
            if (data.total_count !== 0) {
                var username = data.items[0].login;
                //console.log(username);

                if (username !== null && username !== undefined) {
                    client.get('/users/' + username, {},
                        function (err, status, body, headers) {
                            if (err) {
                                return console.log("Error:" + err);
                            }
                            callback(body);
                        });
                }
            } else {
                callback(undefined);
            }
        }
    },

    getUserRepos: function (username, callback) {
        ghuser = client.user(username);
        ghuser.repos(function (err, data, headers) {
            if(err){
                return consle.log("Error: " + err);
            }
            callback(data);
        });
    },

    getUserFollowers: function (username, callback) {
        ghuser = client.user(username);
        ghuser.followers(function (err, data, headers) {
            if(err){
                return consle.log("Error: " + err);
            }
            callback(data);
        });
    }
}
