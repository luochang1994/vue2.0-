module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error", "never", { "beforeStatementContinuationChars": "always" }],
    "comma-dangle": ["error", "always-multiline"],
    "operator-linebreak": ["error", "before"],
    "space-before-function-paren": ["error", "always"],
    "import/prefer-default-export": ["off"],
    // "arrow-body-style": ["warn", "as-needed"],
    "vue/no-parsing-error": ["error", { "x-invalid-end-tag": false }],
  }
}
