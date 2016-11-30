// This is the api to our service
// Just normal functions in this case

module.exports = function (callback) {

    //Config the API to use Loki DB
    require('../integration/loki')({
        location: 'db/braggers.json',
        existing: true,
        callback: execute
    });

    function execute(db) {

        //Note that this API will more application specific 
        //comparing to the one exposed by the DB layer which is just crud to the DB
        const api = {
            getUsers: db.getUsers,
            getUserById: db.getUserById
        }        
        
        callback(api);
    }
}
