var debug = require('debug')('db-test');
var loki = require('lokijs');
var db = new loki('db.json');
db.loadDatabase(db, function() {
    debug(db.getCollection("users").find());
});