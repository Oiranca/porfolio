import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        settings: { react: { version: '18.0' } },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            eslintConfigPrettier,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            'react/display-name': 2,
            'react/jsx-key': 2,
            'react/jsx-no-comment-textnodes': 2,
            'react/jsx-no-duplicate-props': 2,
            'react/jsx-no-target-blank': 2,
            'react/jsx-no-undef': 2,
            'react/jsx-uses-react': 2,
            'react/jsx-uses-vars': 2,
            'react/no-children-prop': 2,
            'react/no-danger-with-children': 2,
            'react/no-deprecated': 2,
            'react/no-direct-mutation-state': 2,
            'react/no-find-dom-node': 2,
            'react/no-is-mounted': 2,
            'react/no-render-return-value': 2,
            'react/no-string-refs': 2,
            'react/no-unescaped-entities': 2,
            'react/no-unknown-property': 2,
            'react/no-unsafe': 0,
            'react/prop-types': 2,
            'react/react-in-jsx-scope': 'off',
            'react/require-render-return': 2,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    }
);
