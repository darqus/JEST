import globals from 'globals'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import rules from './rules/eslint.js'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.eslintrc.js',
      '.yarn/**',
      'coverage/',
      // Legacy JS helper that isn't used by TS tests
      'src/helpers/memoizejs.js',
    ],
  },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    plugins: {
      // Include TS plugin so inline disable/enable comments for @typescript-eslint rules in .js files don't error
      import: importPlugin,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        // Use the TS Project Service to support project references
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    settings: {
      'import/resolver': {
        // Resolve TS path aliases like @/*
        typescript: {
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      ...rules,
    },
  },
  {
    files: ['jest.config.js'],
    rules: {
      // Regex strings in Jest config intentionally escape special chars
      'no-useless-escape': 'off',
    },
  },
  // Tests: relax overly strict type-safety rules to reduce noise
  {
    files: ['tests/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      // Extended Jest ruleset. Critical correctness rules are errors; stylistic ones are warns.
      'jest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'test' }],
      'jest/expect-expect': 'error',
      'jest/no-alias-methods': 'warn',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-deprecated-functions': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-done-callback': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-interpolation-in-snapshots': 'warn',
      'jest/no-jasmine-globals': 'warn',
      'jest/no-mocks-import': 'warn',
      'jest/no-restricted-jest-methods': 'warn',
      'jest/no-restricted-matchers': 'warn',
      'jest/no-standalone-expect': 'warn',
      'jest/no-test-prefixes': 'warn',
      'jest/no-test-return-statement': 'warn',
      'jest/prefer-called-with': 'warn',
      'jest/prefer-comparison-matcher': 'warn',
      'jest/prefer-equality-matcher': 'warn',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-hooks-in-order': 'warn',
      'jest/prefer-hooks-on-top': 'warn',
      'jest/prefer-lowercase-title': 'warn',
      'jest/prefer-mock-promise-shorthand': 'warn',
      'jest/prefer-spy-on': 'warn',
      'jest/prefer-strict-equal': 'off',
      'jest/prefer-to-be': 'warn',
      'jest/prefer-to-contain': 'warn',
      'jest/prefer-to-have-length': 'warn',
      'jest/require-hook': 'off',
      'jest/require-to-throw-message': 'warn',
      'jest/require-top-level-describe': 'off',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',
      'jest/valid-title': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // Educational examples: don't warn for unsafe/any to keep focus on learning materials
  {
    files: ['src/code-basics/**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // Turn off all ESLint rules that conflict with Prettier
  eslintConfigPrettier,
]
