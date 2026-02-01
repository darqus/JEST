# JEST

🚀 Modern TypeScript + Jest playground with ESLint (Flat Config), Prettier, Husky, and comprehensive CI/CD pipeline.

![CI](https://github.com/darqus/JEST/actions/workflows/ci.yml/badge.svg)
![Dependencies](https://github.com/darqus/JEST/actions/workflows/dependencies.yml/badge.svg)

## 📋 Stack Overview

### Core Technologies

- **TypeScript 5.9.3** - Strict type checking with modern ES2022 features
- **Jest 30.2.0** - Testing framework with comprehensive coverage reporting
- **Yarn 4.5.3** - Modern package manager with Plug'n'Play support

### Development Tools

- **ESLint 9.39.2** - Code quality with TypeScript support and flat config
- **Prettier 3.7.4** - Code formatting with consistent style
- **Husky 9.1.7** - Git hooks for pre-commit quality checks
- **lint-staged 16.2.7** - Run linters on staged files

### CI/CD & Automation

- **GitHub Actions** - Automated testing on Node.js 20.x & 22.x
- **Dependency Updates** - Weekly automated dependency management
- **Coverage Reporting** - Integrated with Codecov
- **Build Pipeline** - Type checking and artifact generation

## 🚀 Requirements

- **Node.js 20+** - Latest LTS version recommended
- **Yarn 4.5.3** - Enabled via Corepack: `corepack enable`

## ⚡ Quick Start

```bash
# Install dependencies
yarn install

# Run all tests
yarn test

# Watch tests interactively
yarn test:debug

# Type checking
yarn type-check

# Lint and format
yarn lint:fix && yarn format
```

## 📜 Available Scripts

### Testing

- `test` — Run all Jest tests
- `test:debug` — Run Jest in interactive watch mode
- `test:watch` — Shorthand for watch mode
- `test:coverage` — Run tests with coverage report
- `test:ci` — CI-optimized test run with coverage
- `test:changed` — Run tests only for changed files
- `test:related` — Run tests related to changed files

### Code Quality

- `lint` — Run ESLint with cache and zero warnings tolerance
- `lint:fix` — Run ESLint with auto-fix and cache
- `lint:report` — Generate JSON lint report
- `format` — Format code with Prettier
- `format:check` — Check code formatting without changes
- `type-check` — Run TypeScript type checking
- `type-check:watch` — Watch mode for type checking

### Maintenance

- `update:deps` — Interactive dependency upgrades
- `update:patches` - Apply package patches
- `clean` — Remove build artifacts and cache
- `clean:deps` — Clean reinstall of dependencies
- `prepare` — Setup Git hooks
- `pre-commit` — Run lint-staged manually
- `postinstall` — Setup development environment

## Linting & formatting

The repo uses ESLint (Flat Config) for code quality and Prettier for formatting. Conflicting style rules are disabled via `eslint-config-prettier`.

- Detailed docs: see [docs/linting.md](docs/linting.md)
- VS Code workspace is preconfigured in `.vscode/` to format and fix on save
- Pre-commit hooks (husky + lint-staged) auto-run Prettier and ESLint on staged files

## Running Jest directly

Run all tests:

```sh
yarn jest
```

Run all tests with watch:

```sh
jest -i --watchAll
# or
yarn test:debug
```

Run a specific test file:

```sh
yarn jest getFixedNumber
```

## Recommended Extension for VS Code

'orta.vscode-jest'

## Recommended VS Code setting for see inline hints

```json
  "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
  "javascript.inlayHints.parameterTypes.enabled": true,
  "javascript.inlayHints.propertyDeclarationTypes.enabled": true,
  "javascript.inlayHints.variableTypes.enabled": true,

```

## Further reading

- Official Jest docs: [English](https://jestjs.io/docs/getting-started) · [Russian](https://jestjs.io/ru/docs/getting-started)
- Linting & formatting: [docs/linting.md](docs/linting.md)

## Docs

- Linting & formatting setup: [docs/linting.md](docs/linting.md)
