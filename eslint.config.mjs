import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: "readonly",
        module: "readonly",
        React: "readonly",
        window: "readonly"
      }
    },
    plugins: {
      "@next/next": next,
      react
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off"
    }
  }
];

export default eslintConfig;
