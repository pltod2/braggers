var exportMongoDbFunc = require('../export/mongoDbExport.js');
var create = require('../export/create-files.js')
var url = "mongodb://localhost:27017/braggers";

function MongoExport (url){
    create.create()
    exportMongoDbFunc.exportMongoDb(url);
}

MongoExport(url);