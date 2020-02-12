{
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "jest": true,
        "es6": true
    },
    "settings": {
        "react": {
        "createClass": "createReactClass",
        "pragma": "React",
        "version": "detect",
        "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
        "Hyperlink",
        {"name": "Link", "linkAttribute": "to"}
        ]
    },
    "rules": {
        "no-console": "off",
        "react/prop-types": 0
    }
}
