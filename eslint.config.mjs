// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {languageOptions: { globals: {...globals.browser, ...globals.node} }},
//   pluginJs.configs.recommended,
// ];

import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        rules: {
            'no-var': 'warn',
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            semi: ['warn', 'always'],
        },
    },
];
