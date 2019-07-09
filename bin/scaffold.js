#!/usr/bin/env node

/**
 * @file
 * CLI entry point for scaffolder
 */

const meow = require('meow');
const install = require('../lib');

const { input, flags } = meow(
  `
  Usage
    $ npx @financial-times/sk [path] [--oldschool] [--additions]

  Options
    --oldschool, -v1  Use the old Nunjucks version
    --additions, -a  Install additional dependencies
    --branch <branch>, -b  Use non-standard Starter Kit branch
`,
  {
    flags: {
      oldschool: {
        type: 'boolean',
        alias: 'v1',
        default: false,
      },
      additions: {
        type: 'boolean',
        alias: 'a',
        default: false,
      },
      branch: {
        type: 'string',
        alias: 'b',
        default: 'v2',
      },
    },
  },
);

install(input, flags);
