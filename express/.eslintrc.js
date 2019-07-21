module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    complexity: ["error", 5],
    "max-lines": ["error", 150],
    "no-var": "error",
    "no-param-reassign": "error",
    "no-console": "warn",
    "max-lines-per-function": ["error", 30],
    "max-params": ["error", 4]
  }
};
