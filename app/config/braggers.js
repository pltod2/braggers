const SlackAPI = require('../integration/slack');

// TODO Single Source of Truth Data Store Should Be Here
// TODO Here must be weaved other integration/trasnformation logic 

module.exports = {
    getAllUsers: SlackAPI.users
}