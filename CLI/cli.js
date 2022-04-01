const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
    // the $ 0 will auto match the file name
    // the <> will match up to the .command
    // the [] will match to .options
    .usage('$0: Usage <cmd> [options]')
    .command(
        // command
        'search <keyword>',
        // description
        'search for information on a Breaking Bad character using a keyword.',
        // builder
        (yargs) => {
            return yargs
                .positional('keyword', {
                    describe: 'keyword for the search',
                    type: 'string'
                })
                .option('c', {
                    alias: 'count',
                    describe: 'count of characters info to display',
                    default: 2,
                    type: 'number'
                });
        },
        // handler
        (args) => {
            if (args.keyword) {
                app.searchStart(args);
            } else {
                console.log(`${args.keyword} is not a valid choice.`);
            }
        }
    )
    .help().argv;