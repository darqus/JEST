# JEST

TypeScript + Jest playground with ESLint (Flat Config), Prettier, Husky, and CI out of the box.

![CI](https://github.com/darqus/JEST/actions/workflows/ci.yml/badge.svg)

## Requirements

- Node.js 20+
- Yarn 4 (via Corepack). Tip: `corepack enable`

## Quick start

```sh
# install dependencies
yarn install

# run all tests
yarn test

# watch tests interactively
yarn test:debug
```

## Scripts

- `test` — run jest
- `test:debug` — run jest in watch mode
- `test:watch` — shorthand for watch mode
- `test:coverage` — run tests with coverage report
- `update:deps` — upgrade deps interactively
- `lint` — run eslint (with cache)
- `lint:fix` — run eslint with --fix (with cache)
- `format` — run prettier write on repo

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

## Further reading

- Official Jest docs: [English](https://jestjs.io/docs/getting-started) · [Russian](https://jestjs.io/ru/docs/getting-started)
- Linting & formatting: [docs/linting.md](docs/linting.md)

## Docs

- Linting & formatting setup: [docs/linting.md](docs/linting.md)
