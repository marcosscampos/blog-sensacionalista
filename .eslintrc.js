module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@vue",
        "import-helpers"
    ],
    "rules": {
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [
                    'module',
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: { order: 'asc', ignoreCase: true }
            }
        ],
        "func-style": [
          "error",
          "declaration",
            {
                "allowArrowFunctions": true
            }
        ]
    }
};