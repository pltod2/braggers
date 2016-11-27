//var debug = require('debug')('db-test');
var loki = require('lokijs');
var db = new loki('braggers.json');
var users = db.addCollection('users');

module.exports = {

    insertUser: function (user) {
        users.insert(user);
        db.saveDatabase();
    },

    updateCollectionWithNewUsers: function (user) {
        db.loadDatabase({}, function () {
            var col = db.getCollection('users');
            col.insert(user);
            db.saveDatabase();
        });
    },

    findUserBySlackId: function (id, callback) {
        db.loadDatabase({}, function () {
            var col = db.getCollection('users');
            callback(col.findOne({ 'slackId': id }));
        });
    },

    getAllUsers: function (callback) {
        callback(users.data());
    }
};
