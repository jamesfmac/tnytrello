#!/usr/bin/env node

const program = require('commander');

program
    .version('0.1.0')
    .option('-c --config','configure trello API key')
    .action(()=>{
        console.log('options loaded')
    })

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(env, options){
    var mode = options.setup_mode || "normal";
    env = env || 'all';
    console.log('setup for %s env(s) with %s mode', env, mode);
  });




/* parse inputs and pass to commander */

program.parse(process.argv);


/* Show help text if no arguments are passed in*/

if (!program.args.length) program.help();