module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["immutable"],
  rules: {
    "immutable/no-mutation": 2,
  },
};
