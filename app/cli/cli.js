var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var program = require('commander');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Braggers', { horizontalLayout: 'full' })
    )
);

program.version('0.0.1')
    .command('e', 'Extracts all users from a Slack channel and gets their details from Github')
    .command('u', 'Updates the database with new users from Slack.')
    .parse(process.argv);