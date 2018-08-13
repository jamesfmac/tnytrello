#!/usr/bin/env node

const program = require('commander');

program
    .version('0.1.0')
    
    .option('-c --config','configure trello API key')

program
    .command('add <title>')
    .description('add a new idea to your list')
    .option('-i --important','Add starts to idea title')
    .action((title, options)=>{
      var important = " "
      if(options.important){
        important = " important "
      }
        console.log(`new${important}idea ${title} added`)
    })

/* parse inputs and pass to commander */

program.parse(process.argv);


/* Show help text if no arguments are passed in*/

if (!program.args.length) program.help();