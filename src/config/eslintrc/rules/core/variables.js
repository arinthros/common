/* eslint-disable jsdoc/require-file-overview */
// Most of these are from eslint-config-airbnb-base.
const confusingBrowserGlobals = require('./confusing-browser-globals')

module.exports = {
  rules: {
    // Enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // Disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead.',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead.',
      },
    ].concat(confusingBrowserGlobals),

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Disallow use of variables before they are defined
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
  },
}
