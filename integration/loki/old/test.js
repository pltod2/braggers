const debug = require('debug')('db-test');
const test = require("tape");
const database = require('./database.js')();

//const user = {"email": "test1.gmail.com", "name": "Test1"};

test('## Test functions ##', function(t)
{ 
    database.initDb();    

    //database.removeAll(users);
    //database.insertMany(user);

    // var data = db.findAll(collection);
    // debug(data);
    // t.equal(testData.length, data.length, testData.length + " records exists")
    // db.removeAll(collection);
    // t.equal(0, db.findAll(collection).length, 'everything has been removed')
    t.end();
});