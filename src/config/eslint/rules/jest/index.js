/* eslint-disable jsdoc/require-file-overview */
module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest', 'jest-dom', 'testing-library'].filter(Boolean),
}
