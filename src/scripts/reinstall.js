#!/bin/bash
/**
 * Clean up untracked files and reinstall dependencies.
 *
 * @module reinstall
 *
 * @example
 * yarn reinstall
 */
const { execSync } = require('child_process')

// eslint-disable-next-line no-console
console.log('[0/4] Cleaning up untracked files...')
execSync(
  `${
    process.platform === 'win32' ? 'del /Q' : 'rm -rf'
  } node_modules && yarn install`,
  { stdio: 'inherit' },
)
