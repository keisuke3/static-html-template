import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      eslintImport,
      "unused-imports": unusedImports,
    },
    rules: {
      "eslintImport/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "object",
            "type",
            "index"
          ],
          "newlines-between": "always",
          "pathGroupsExcludedImportTypes": ["builtin"],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "pathGroups": [
            {
              "pattern": "/pages/**",
              "group": "internal",
              "position": "before"
            },
            {
              "pattern": "/styles/**",
              "group": "internal",
              "position": "before"
            }
          ]
        }
      ],
      "eslintImport/no-cycle": "error",
      "eslintImport/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never",
        }
      ],
      "eslintImport/prefer-default-export": "off",
      "no-implicit-coercion": "error",
      "unused-imports/no-unused-imports": "error",
      "arrow-body-style": "off",
      "no-console": "error",
      "no-fallthrough": "off",
      "camelcase": [
        "error",
        {
          "ignoreImports": true,
          "properties": "never",
          "ignoreDestructuring": true
        }
      ]
    }
  }
]