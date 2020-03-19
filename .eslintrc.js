module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:import/react'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src'],
      },
    },
  },
  // add your custom rules here
  rules: {
    indent: [
      'error', 2,
      {
        SwitchCase: 1,
        ignoredNodes: ['JSXElement *'],
      },
    ],
    'template-curly-spacing' : 'off',
    'linebreak-style': 'off', // Неправильно работает в Windows.
    'quotes': ['error', 'single'],
    'semi': 'off',
    'no-var': 'error',
    'global-require': 'error',
    'no-undef': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-unused-vars': ['error', { 'args': 'none' }], // не выдает ошибку при не использовании var
    // 'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-newline': 'off', // Несовместимо с prettier
    'no-mixed-operators': 'off', // Несовместимо с prettier
    'space-before-function-paren': 0, // Несовместимо с prettier
    'no-nested-ternary': 'off',
    'arrow-body-style': 'off',
    // 'indent' : 'off',
    // 'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator='in']'],
    'comma-dangle': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    // 'import/no-dynamic-require': 'off',
    // 'global-require': 'off',
    'import/no-named-as-default-member': 'off',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    // "strict": 0,
    'space-in-parens': ['error', 'never'],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'prefer-arrow-callback': ['error'],
    // 'arrow-parens': ['error', 'as-needed'],
    'arrow-parens': 'off',
    'camelcase': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'consistent-return': 'off', // уточнить, нормальное поведение или нет
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-multi-spaces': ['error'],
    'template-curly-spacing': ['error', 'never'],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'curly': 2,
    'brace-style': 'error',
    'id-length': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/display-name': 0,
    'react/prop-types': 'off',
    // 'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    // 'react/forbid-prop-types': 'off' // airbnb использует уведомление об ошибке
  },
}
