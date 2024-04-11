module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/extensions': ['error', 'always'],
        'no-console': 'off',
        'no-unused-vars': 'off',
    },
};
module.exports = {
    parserOptions: {
        ecmaVersion: 2021, // or the version of ECMAScript you are using
        sourceType: 'module' // This line is important
    },
    plugins: ['import'],
    rules: {
        'import/extensions': ['error', {
            'js': 'never',
            'jsx': 'never', // If you're using JSX
            'ts': 'never', // If you're using TypeScript
            'tsx': 'never' // If you're using TypeScript with JSX
        }]
    }
};
