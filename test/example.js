const log = require('debug')('example-test-suite');
const test = require('tape');
const tapSpec = require('tap-spec');

const slackApi = require('../app/integration/slack');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('### Slack Integration ###', function (t) {

    log("LOG SOMETHING LIKE THAT");

    slackApi.users(function (users) {
        t.equal(29, users.members.length, '29 users found');
        t.end();
    })

});
