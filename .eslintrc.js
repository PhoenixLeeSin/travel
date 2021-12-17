module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0, // 解决：Expected indentation of 0 spaces but found 2，这个报错
    'space-before-function-paren': 0, // 解决：Missing space before function parentheses，这个报错，就是你写的函数，函数名字和后面随之带着的括号之后没有空格，加上之后可以自动加上
  },
};
