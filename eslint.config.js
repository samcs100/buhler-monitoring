import js from "@eslint/js";
import globals from "globals";
import vue from "eslint-plugin-vue";
import standard from "@vue/eslint-config-standard";
import prettier from "@vue/eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "public/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
  },
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  ...(Array.isArray(standard) ? standard : [standard]),
  ...(Array.isArray(prettier) ? prettier : [prettier]),
  {
    files: ["src/**/*.{js,vue}"],
    plugins: { "unused-imports": unusedImports },
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];
