var github = require('octonode');

module.exports = function(userEmail){

    if(userEmail !== undefined){

        var client = github.client();
        var ghsearch = client.search();
        var usersData = undefined;

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
         var username = data.items[0].login;
        //console.log(username);
       
        if (username != null && username != undefined) {
           client.get('/users/' + username, {}, 
               function (err, status, body, headers) {
                   printService(body)
               });
        }
        }

        function printService(body) {
            console.log(body);
        }
    }
}