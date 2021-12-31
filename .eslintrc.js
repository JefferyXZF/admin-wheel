module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential', // Vue 规则
    'airbnb-base', // airbnb 规范
    'plugin:prettier/recommended', // Prettier规则集
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser', // .ts 文件解析器，帮助ESLint解析typescript文件
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // 自定义规则，配置后会覆盖extends中已有的规则，官方规则配置手册: https://eslint.bootcss.com/docs/rules/
  rules: {
    'prettier/prettier': 'error',
  },
}
