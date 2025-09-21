export default {
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      groups: [
        'builtin', // Built-in imports (come from NodeJS native) go first
        'external', // <- External imports
        'internal', // <- Absolute imports
        ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
        'index', // <- index imports
        'unknown', // <- unknown
      ],
      pathGroups: [
        // { pattern: '@jest/globals', group: 'external', position: 'before', },
        { pattern: '@jest/**', group: 'external', position: 'before' },
        { pattern: '@/**', group: 'internal', position: 'before' },
        { pattern: '^[./]', group: 'internal', position: 'before' },
      ],
      pathGroupsExcludedImportTypes: ['ts'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      distinctGroup: true,
      warnOnUnassignedImports: true,
    },
  ],
  // Logic/quality rules (style handled by Prettier)
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  curly: 'error',
  eqeqeq: ['error', 'smart'],
  'prefer-promise-reject-errors': 'off',
  // allow debugger during development only
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-useless-constructor': 'off',
  'no-shadow': 'off',
  'no-var': ['error'],

  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-assignment': 'warn',

  '@typescript-eslint/no-shadow': ['error'],

  '@typescript-eslint/no-unused-vars': 'error',

  '@typescript-eslint/restrict-template-expressions': 'warn',

  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: true,
    },
  ],

  // to enforce using type for object type definitions, can be type or interface
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

  // this rule, if on, would require explicit return type on the `render` function
  '@typescript-eslint/explicit-function-return-type': 'off',

  // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
  '@typescript-eslint/no-var-requires': 'off',

  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  '@typescript-eslint/strict-boolean-expressions': 'off',
}
