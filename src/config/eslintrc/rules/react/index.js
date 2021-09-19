/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [path.join(__dirname, './cra-no-conflict.js')],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
}
