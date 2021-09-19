/* eslint-disable jsdoc/require-file-overview */
const path = require('path')

module.exports = {
  extends: [path.join(__dirname, './cra-no-conflict.js')],
  env: {
    'jest/globals': true,
  },
  plugins: ['jest', 'jest-dom', 'testing-library'].filter(Boolean),
}
