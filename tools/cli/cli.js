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
    .command('initDB', 'Create Database - Extracts all users from a Slack Team and updates them with their details from Github.')
    .command('updateDB', 'Updates the database with new users from Slack.')
    .command('exportToMongoDb','Exports data from local database to MongoDB.')
    .command('backupDB','Backup the database.')
    .parse(process.argv);