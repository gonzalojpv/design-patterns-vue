module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // prod issues
    'arrow-body-style': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'space-before-function-paren': 'off',
    'no-empty': 'off',
    'object-curly-spacing': 'off',
    'operator-linebreak': 'off',
    'no-dupe-keys': 'off',
    'vue/no-dupe-keys': 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'object-shorthand': 'off',
    'no-underscore-dangle': 'off'
  }
}
