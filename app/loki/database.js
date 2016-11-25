var debug = require('debug')('db-test');
var loki = require('lokijs');
var posts = require('./posts.js');
var db = new loki('db.json');
var collection = 'users';
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
    var collection = 'posts';
    db.loadDatabase({}, function() {
        var postsCollection = db.getCollection(collection);
        debug(postsCollection);
        if(!postsCollection) {
            debug('creating...')
            postsCollection = db.addCollection(collection);
            posts.forEach(function(post) {
                postsCollection.insert(post);
            })
            db.saveDatabase(); 
        } else {
            debug('reading...')
            debug(postsCollection.find());
        }
    });    
    
    

 
};

function insertMany(data)
{
  users.insert(data);
  db.saveDatabase();
  debug(users.find());
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
