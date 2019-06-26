#!/usr/bin/env node

'use strict';

const program = require('commander'),
      {app} = require('config-component').get(module)
;

program
  .version(app.version)
  .usage('<command> \nwhere <command> is one of: install')
  .command('install')
  .action(function(cmd){
    console.log(cmd);
  })
;

program.parse(process.argv);
