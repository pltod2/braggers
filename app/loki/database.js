var debug = require('debug')('db-test');
var loki = require('lokijs');
var db = new loki('test.db');
var collection = 'users.json';
var users = db.addCollection(collection);

module.exports = function(collection){
    
return {
    initDb: initDb,
    insertMany: insertMany,
    insertOne: insertOne,
    findAll: findAll,
    removeAll: removeAll,
    removeOne: removeOne,
}

function initDb(){
    var db = new loki('test.db');
};

function insertMany(collection, data)
{
  collection.insert(data);
};

function insertOne(collection, item)
{
    collection.insertOne(item);
}

function findAll(collection)
{
    return db.getCollection(collection);
}

function removeAll(collection)
{
    db.removeCollection(collection);
}

function removeOne(collection, item)
{
    collection.remove(item);
}


};
