var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

module.exports = {
    exportMongoDb : exportMongoDb
}

function exportMongoDb(url) {
    var files = {};
    var currFile;
    var readableStream;
    var collection;
console.log(__dirname)
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            function insertData(col, data) {
                col.insert(data, function (data, err) {
                    if (err) {
                        return console.error(err);
                    }
                });
            }

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

                        readableStream.on('end', function () {
                            collection = db.collection(file.toString().slice(0, -5));
                            var dbContent = JSON.parse(data);
                            for (var i = 0; i < dbContent.length; i++) {
                                insertData(collection, dbContent);
                            }
                        })
                        readableStream.on('close', function (err) {
                            console.log('Close db')
                            db.close();
                        })
                    }

                });

            });
        };
    });
}