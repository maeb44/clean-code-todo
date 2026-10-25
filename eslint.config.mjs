import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
		...js.configs.recommended,
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn"
	} },
  { files: ["**/*.css"], plugins: { css }, language: "css/css",  extends: ["css/recommended"],  rules: {
    "css/no-important": "off"
  } },
	eslintConfigPrettier,
]);
