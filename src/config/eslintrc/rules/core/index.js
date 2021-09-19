/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, './best-practices.js'),
    path.join(__dirname, './errors.js'),
    path.join(__dirname, './es6.js'),
    path.join(__dirname, './imports.js'),
    path.join(__dirname, './node.js'),
    path.join(__dirname, './strict.js'),
    path.join(__dirname, './style.js'),
    path.join(__dirname, './variables.js'),
  ],
}
