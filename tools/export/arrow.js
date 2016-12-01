var ArrowDB = require('arrowdb');
var fs = require('fs');

function exportArrowDb(key) {
    var arrowDBApp = new ArrowDB(key);
    arrowDBApp.usersLogin({
        login: 'meglena',
        password: '123456'
    }, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
    })

    fs.readdir(__dirname, function (err, files) {
        if (err) {
            return console.error(err);
        }

        files.forEach(function (file) {
            currFile = __dirname.toString() + '/' + file.toString();
            if (fs.lstatSync(currFile).isDirectory() !== true && file.split('.').pop() == 'json') {

                var readableStream = fs.createReadStream(currFile);
                var data = '';

                readableStream.on('data', function (chunk) {
                    data += chunk;
                });

                if (file.toString().slice(0, -5) == 'users') {
                    readableStream.on('end', function () {
                        var dbContent = JSON.parse(data);
                        for (var i = 0; i < dbContent.length; i++) {
                            var userEmail = dbContent[i].slackEmail;
                            var userName = dbContent[i].firstName;
                            var userLastName = dbContent[i].lastName;

                            //Create user
                            arrowDBApp.usersCreate({
                                email: userEmail,
                                first_name: userName,
                                last_name: userLastName,
                                password: '123456',
                                password_confirmation: '123456'
                            }, function (err, result) {
                                if (err) {
                                    console.error(err.message);
                                } else {
                                    //   console.log(result.body.response.users[0]);
                                    // If you are manually managing user sessions or cookies,
                                    // the method returns both a cookie and session ID.
                                    arrowDBApp.sessionCookieString = result.cookieString;
                                    sessionID = result.body.meta.session_id;
                                }
                            });
                        }

                    })
                }

            }

        });

    });


    /*
   //Create post
   arrowDBApp.postsCreate({
       content: 'Man Walks On Moon',
       title: 'News of the day',
      // photo: fs.createReadStream('photo.jpg')
   }, function(err, result) {
       if (err) {
           console.error(err.message);
       } else {
           console.log(result.body.response.posts[0]);
       }
   });
   */
};