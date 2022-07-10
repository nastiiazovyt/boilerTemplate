module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'import/export': 'off',
        'vue/multi-word-component-names': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'object-property-newline': 'off',
        'object-curly-newline': 'off',
        'no-debugger': 'off',
        'camelcase': 'off',
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'never']
    },
    'globals': {
        'defineProps': 'readonly',
        'defineEmits': 'readonly',
        'defineExpose': 'readonly',
        'withDefaults': 'readonly'
    }
};
