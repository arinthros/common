/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, './base.js'),
    path.join(__dirname, './rules/cypress/index.js'),
    path.join(__dirname, './rules/import/cra-no-conflict.js'),
    path.join(__dirname, './rules/jest/cra-no-conflict.js'),
    path.join(__dirname, './rules/jsdoc/index.js'),
    path.join(__dirname, './rules/react/cra-no-conflict.js'),
  ],
}
