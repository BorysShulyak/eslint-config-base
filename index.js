module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
  },
  settings: {
    jest: {
      version: 27
    }
  },
  plugins: ['simple-import-sort', 'jest', 'jest-formatting'],
  env: {
    "commonjs": true,
    "es2022": true,
    "node": true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        bracketSameLine: false
      },
      { usePrettierrc: false }
    ],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'always',
        'cjs': 'always',
        'mjs': 'always',
      }
    ],
    'no-underscore-dangle': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'func-names': 'error'
  }
};
