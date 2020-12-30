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

const rmCommand = process.platform === 'win32' ? 'rmdir /Q /S' : 'rm -rf'
execSync(`${rmCommand} node_modules && ${rmCommand} publish && yarn install`, {
  stdio: 'inherit',
})
