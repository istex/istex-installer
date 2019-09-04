#!/usr/bin/env node

'use strict';

const program = require('commander'),
      {app} = require('config-component').get(module)
;

program
  .version(app.version)
  .usage('<command> \nwhere <command> is one of: install')
  .command('install [modules...]')
  .options()
  .action(function(modules){
    console.log(arguments);
  })
;

program.parse(process.argv);
