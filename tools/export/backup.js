var fs = require('fs');

module.exports = {
    backup: backup
}

function backup() {
    var files = {};
    var currFile;
    var readableStream;
    var writableStream;
    var dir = '../../db'
    var copyDir = '../../db/Backup'

    fs.readdir(dir, function (err, files) {
        if (err) {
            return console.error(err);
        }

        files.forEach(function (file) {
            currFile = dir.toString() + '/' + file.toString();
            var date = new Date();
            if (fs.lstatSync(currFile).isDirectory() !== true) {
                var newDate = date.getFullYear().toString() + '_' + (date.getMonth() + 1).toString() + '_' + date.getDate().toString();
                var copyFile = copyDir.toString() + '/' + file.toString().slice(0, -5) + newDate + '.json';
                console.log('Backup file ' + file);
                readableStream = fs.createReadStream(currFile, { flags: 'r', encoding: 'utf-8' }, function (err, data) {
                    if (err) {
                        return console.error(err);
                    };
                });
                writableStream = fs.createWriteStream(copyFile);
                readableStream.pipe(writableStream);
            }
        });

    });
};