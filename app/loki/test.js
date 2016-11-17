var debug = require('debug')('db-test');
var test = require("tape");
var loki = require('lokijs');
var database = require('./database.js')

var collection = 'users.json';
var db = new loki('test.db');
var users = db.addCollection(collection);

var testData = [ {"email": "test1.gmail.com", "name": "Test1"}, 
{"email": "test2.gmail.com", "name": "Test2"}]; 
var item = {"email": "anotherTest.gmail.com", "name": "AnotherTest"};
console.log("test")

test('## Test functions ##', function(t)
{ 

    db.removeAll(users);
    db.insertMany(users, testData);
    var data = db.findAll(collection);
    debug(data);
    t.equal(testData.length, data.length, testData.length + " records exists")
    db.removeAll(collection);
    t.equal(0, db.findAll(collection).length, 'everything has been removed')
    t.end();
});