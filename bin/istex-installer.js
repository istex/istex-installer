#!/usr/bin/env node

'use strict';

const program = require('commander'),
      {app} = require('config-component').get(module)
;

program
  .version(app.version, '-v, --version')
  .command('install')
  .action(function(cmd){
    console.log(cmd);
  })
;

program.parse(process.argv);
