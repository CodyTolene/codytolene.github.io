// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const unicornPlugin = require('eslint-plugin-unicorn');

// const importPlugin = require("eslint-plugin-import");
// const rxjsPlugin = require("eslint-plugin-rxjs");
// const jsdocPlugin = require('eslint-plugin-jsdoc');

const eslintConfig = tseslint.config(
  {
    files: ['src/app/**/*.ts'],
    ignores: [
      '.angular/**/*',
      '.husky/**/*',
      '.vscode/**/*',
      'dist/**/*',
      'docs/**/*',
      'node_modules/**/*',
      'patches/**/*',
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      prettierPlugin,
      unicornPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/component-max-inline-declarations': 'error',
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'ct', style: 'kebab-case' },
      ],
      '@angular-eslint/consistent-component-styles': 'error',
      '@angular-eslint/contextual-decorator': 'error',
      '@angular-eslint/contextual-lifecycle': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'ct', style: 'camelCase' },
      ],
      '@angular-eslint/no-async-lifecycle-method': 'error',
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-forward-ref': 'error',
      '@angular-eslint/no-host-metadata-property': [
        'error',
        { allowStatic: true },
      ],
      '@angular-eslint/no-input-prefix': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/pipe-prefix': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/prefer-output-readonly': ['error'],
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/require-localize-metadata': 'error',
      '@angular-eslint/runtime-localize': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
      '@angular-eslint/use-component-selector': ['error'],
      '@angular-eslint/use-component-view-encapsulation': ['error'],
      '@angular-eslint/use-injectable-provided-in': 'error',
      '@angular-eslint/use-lifecycle-interface': ['error'],
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'constructor',
            'instance-field',
            'instance-method',
            'static-field',
            'static-method',
          ],
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'classProperty',
          format: ['PascalCase', 'camelCase'],
          modifiers: ['public'],
        },
        { selector: 'function', format: ['camelCase'] },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-for-of': ['warn'],
      '@typescript-eslint/prefer-function-type': ['warn'],
      '@typescript-eslint/unified-signatures': 'warn',
      eqeqeq: ['error'],
      'guard-for-in': ['error'],
      'import/no-deprecated': 'off',
      'import/no-unresolved': 'off',
      'no-bitwise': ['error'],
      'no-caller': ['error'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': ['error'],
      'no-empty': 'error',
      'no-eval': ['error'],
      'no-new-wrappers': ['error'],
      'no-throw-literal': ['error'],
      'no-var': ['error'],
      'object-shorthand': ['error'],
      'one-var': ['error', 'never'],
      'prefer-arrow/prefer-arrow-functions': 'off',
      'prefer-const': ['error'],
      radix: ['error'],
      'rxjs/no-async-subscribe': 'off',
      'rxjs/no-sharereplay': 'off',
      'spaced-comment': ['error', 'always', { block: { balanced: true } }],
      // '@angular-eslint/prefer-standalone': 'error',
      // '@angular-eslint/prefer-standalone-component': 'error',
      // '@typescript-eslint/prefer-readonly': 'error', // Causes issues
      // 'import/no-default-export': ['error'],
      // 'jsdoc/check-alignment': ['error'],
      // 'jsdoc/check-indentation': ['error'],
      // 'rxjs-angular/prefer-takeuntil': ['error', { alias: ['untilDestroyed'] }],
      // 'rxjs/no-exposed-subjects': ['error'],
      // 'rxjs/no-finnish': ['error'],
      // 'rxjs/no-ignored-replay-buffer': ['error'],
      // 'rxjs/no-tap': ['error'],
      // 'rxjs/no-unsafe-takeuntil': ['error', { alias: ['untilDestroyed'] }],
      // 'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    },
  },
  {
    files: ['src/app/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/alt-text': 'error',
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/button-has-type': 'error',
      '@angular-eslint/template/click-events-have-key-events': 'error',
      '@angular-eslint/template/conditional-complexity': 'error',
      '@angular-eslint/template/cyclomatic-complexity': 'error',
      '@angular-eslint/template/elements-content': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/i18n': 'error',
      '@angular-eslint/template/interactive-supports-focus': 'error',
      '@angular-eslint/template/label-has-associated-control': 'error',
      '@angular-eslint/template/mouse-events-have-key-events': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-autofocus': 'error',
      '@angular-eslint/template/no-call-expression': 'error',
      '@angular-eslint/template/no-distracting-elements': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-inline-styles': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-ngsrc': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/role-has-required-aria': 'error',
      '@angular-eslint/template/table-scope': 'error',
      '@angular-eslint/template/use-track-by-function': 'error',
      '@angular-eslint/template/valid-aria': 'error',
    },
  },
);

module.exports = eslintConfig;
