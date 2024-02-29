module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }], // 알려지지 않은 prop을 사용하지 않도록 해줌 css 제외
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off', // import React from 'react'; 없어도 됨
    'react-refresh/only-export-components': 'off', // 하나의 컴포넌트를 export할 때에만 효과가 있으니 일단 끈다.
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
