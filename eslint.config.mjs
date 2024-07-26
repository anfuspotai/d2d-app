import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "off", // Allowing console statements, adjust as needed
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-unreachable": "warn",
      "no-process-env": "off",
    },
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: "readonly",
        React: "readonly",
        gql: "readonly",
      },
    },
  },
];
