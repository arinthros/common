# @arinthros/common

A set of common scripts and configurations for JavaScript projects. Inspired by `kcd-scripts` and `react-scripts`.

## Config

### ESLint

### Prettier

### Babel

## Scripts

Example usage:

```json
// package.json

"scripts" {
  "build": "arinthros-common build",
  "reinstall": "arinthros-common reinstall"
}
```

### Build

Compiles a package with Babel.

### Reinstall

Deletes untracked folders like `node_modules` then runs a fresh dependency install.

TODO: support `--yarn` or `--npm` flags, defaults to yarn.
TODO: support a list of additional paths to clear