// eslint-disable-next-line no-undef
module.exports = {
    "settings":{
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "fragment": "Fragment",
            "version": "detect",
            "flowVersion": "0.53"
        },
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
