module.exports = {
  env: {
    browser: true,
    node: true,
  },
  // 코드 검사 규칙
  extends: [
    // vue
    // "plugin:vue/vue3-essential", // Lv 1
    "plugin:vue/vue3-strongly-recommended", // Lv 2
    // "plugin:vue/vue3-recommended", // Lv 3

    // js
    "eslint:recommended",
  ],
  // 코드 분석
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
