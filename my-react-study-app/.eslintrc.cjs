module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'react', 'react-compiler', 'prettier', 'jest-dom'],
    settings: {
        'import/resolver': {
            node: {
                path: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            },
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    ignorePatterns: ['*.config.cjs'],
    rules: {
        'react-compiler/react-compiler': 'error',
        'no-shadow': 'off',
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-unused-vars': 0,
        'react/state-in-constructor': 0,
        'react/destructuring-assignment': 0,
        'react/prefer-stateless-function': 0,
        'react-hooks/exhaustive-deps': 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-a11y/control-has-associated-label': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/jsx-no-constructed-context-values': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-nested-ternary': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
    },
};
