import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// import json from '@eslint/json';
// import markdown from '@eslint/markdown';
// import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  // {
  //   files: ['**/*.json'],
  //   plugins: { json },
  //   language: 'json/json',
  //   extends: ['json/recommended']
  // },
  // {
  //   files: ['**/*.jsonc'],
  //   plugins: { json },
  //   language: 'json/jsonc',
  //   extends: ['json/recommended']
  // },
  // {
  //   files: ['**/*.json5'],
  //   plugins: { json },
  //   language: 'json/json5',
  //   extends: ['json/recommended']
  // },
  // {
  //   files: ['**/*.md'],
  //   plugins: { markdown },
  //   language: 'markdown/gfm',
  //   extends: ['markdown/recommended']
  // },
  // {
  //   files: ['**/*.css'],
  //   plugins: { css },
  //   language: 'css/css',
  //   extends: ['css/recommended']
  // },
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs['jsx-a11y-recommended'],
  eslintConfigPrettier,
  {
    rules: {}
  },
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns')
]);
