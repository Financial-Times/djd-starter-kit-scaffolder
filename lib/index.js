/**
 * @file
 * Install script for Starter Kit
 */

const chalk = require('chalk');
const path = require('path');
const Conf = require('conf');
const { prompt } = require('inquirer');

const config = new Conf();

const install = async (dir, flags) => {
  const answers = await prompt([
    {
      type: 'input',
      name: 'installPath',
      message: 'Local directory for the project (use lowercase with dashes)',
      when: !dir || !dir.length,
    },
    {
      type: 'boolean',
      name: 'createRepo',
      message: 'Create new repo on GitHub?',
    },
    {
      type: 'list',
      name: 'owner',
      message: 'Which GitHub user/org to create repo under?',
      choices: ['financial-times', 'ft-interactive', 'other'],
      default: 'financial-times',
      when: ({ createRepo }) => createRepo === true,
    },
    {
      type: 'input',
      name: 'ownerOther',
      message: 'Please enter a user or org to create repo under',
      when: ({ owner }) => owner === 'other',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What do you want to call this project? (Press enter to use directory name)',
      default: ({ installPath }) => dir || installPath,
      validate: answer => /^[\w-]+$/.test(answer),
    },
    {
      type: 'input',
      message: 'Live URL (leave blank for default):',
      default: ({ projectName }) => `https://ig.ft.com/${projectName}`,
    },
    {
      type: 'input',
      message: 'UUID (if available):',
    },
  ]);

  /**
   * @todo:
   * 1. Download relevant tarball from raw.githubcontent.com
   * 2. Extract to local FS
   * 3. Modify configuration with user values
   *
   * * Some clever things can also be done to remember previous
   *    values by leveraging the `conf` module.
   * * These messages can also be made prettier using `chalk`.
   */
};

module.exports = install;
