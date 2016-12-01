var fs = require("fs");

module.exports = {
    create : createFiles
}

function createFiles() {

    var readableStream = fs.createReadStream('../../db/braggers.json');
    var data = '';
    var fileContent = [];

    readableStream.on('data', function (chunk) {
        data += chunk;
    });

    readableStream.on('end', function () {
        var dbTestContent = JSON.parse(data);
        var only = [];
        for (var i = 0; i < dbTestContent.collections.length; i++) {
            var dataContent = [];
            var fileName = '../export/'+ dbTestContent.collections[i].name + ".json";
            var allData = dbTestContent.collections[i].data
            var allDataLength = allData.length
            for (var j = 0; j < allDataLength; j++) {
                for (var key in allData[j]) {
                    if (key === "meta" || key === "$loki") { delete allData[j][key]; }
                };
                dataContent.push(allData[j]);
            }
            fileContent = JSON.stringify(dataContent);
            createFile(fileName, fileContent);
        }

    });

    function createFile(fileName, fileContent) {
        var stream = fs.createWriteStream(fileName);
        console.log(fileName)
        stream.once('open', function (fd) {
            stream.write(fileContent);
            stream.end();
        });
        console.log("The file was saved!");
    }
}
createFiles();