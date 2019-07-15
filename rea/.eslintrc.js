const path = require('path');


module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "jest"
    ],
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "JitsiMeetExternalAPI": true,
        "ResizeObserver": true,
        "__TESTING__": true,
        "__DEV__": true,
        "google": true,
        "JitsiMeetJS": true,
        "describe": true,
        "it": true,
        "expect": true,
        "afterEach": true,
        "beforeEach": true,
        "before": true,
        "after": true,
        "beforeAll": true,
        "afterAll": true,
        "jest/globals": true,
        "Raven": true,
    },
    "rules": {
        "max-len": 0,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "spaced-comment": 0,
        "no-else-return": 0,
        "quote-props": [
            0,
            "consistent-as-needed"
        ],
        "arrow-body-style": 0,
        "no-unused-expressions": 0,
        "no-nested-ternary": 0,
        "comma-dangle": 0,
        "no-console": 0,
        "react/forbid-prop-types": 0,
        "no-param-reassign": 0,
        "valid-jsdoc": [
            1,
            {
                "requireParamDescription": true,
                "requireReturnDescription": true,
                "requireReturn": false,
                "prefer": {
                    "return": "return"
                },
                "preferType": {
                    "String": "string",
                    "Number": "number",
                    "Boolean": "boolean",
                    "Bool": "boolean",
                    "array": "Array",
                    "object": "Object",
                    "function": "Function"
                }
            }
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prefer-stateless-function": 0,
        "react/jsx-indent-props": [
            2,
            4
        ],
        "react/jsx-indent": [
            2,
            4
        ]
    },
    settings: {
        "import/resolver": {
            "webpack": {
                "config": path.join(__dirname, "eslint.webpack.resolver.config.js"),
                "config-index": 1
            }
        }
    }
};
