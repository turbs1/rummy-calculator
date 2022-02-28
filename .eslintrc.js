module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {ecmaVersion: 8, sourceType: 'module'},
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.json']
      },
      settings: {
        react: {version: 'detect'},
        'import/resolver': {
          typescript: {}
        }
      },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:jest-dom/recommended'
      ],
      rules: {
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/camelcase': 0,
        'react/require-default-props': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            'newlines-between': 'never',
            alphabetize: {order: 'asc', caseInsensitive: true}
          }
        ],
        'import/default': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'react/jsx-filename-extension': 'off',
        'prettier/prettier': [
          'error',
          {
            bracketSpacing: true,
            arrowParens: 'always',
            semi: true,
            trailingComma: 'none',
            singleQuote: true,
            printWidth: 120
          }
        ]
      }
    }
  ]
};