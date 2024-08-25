/**
 * Prettier configuration.
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options
 */
const prettierConfig = {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  experimentalTernaries: false,
  // Import declarations ordering
  importOrder: [
    // Angular first
    '^@angular/(.*)$',
    '^@angular/animations/(.*)$',
    '^@angular/cdk/(.*)$',
    '^@angular/common/(.*)$',
    '^@angular/compiler/(.*)$',
    '^@angular/core/(.*)$',
    '^@angular/forms/(.*)$',
    '^@angular/material/(.*)$',
    '^@angular/material-luxon-adapter/(.*)$',
    '^@angular/platform-browser/(.*)$',
    '^@angular/platform-browser-dynamic/(.*)$',
    '^@angular/router/(.*)$',
    '^@angular/service-worker/(.*)$',
    // Local files next
    '^src/app/components/(.*)$',
    '^src/app/constants/(.*)$',
    '^src/app/decorators/(.*)$',
    '^src/app/directives/(.*)$',
    '^src/app/enums/(.*)$',
    '^src/app/guards/(.*)$',
    '^src/app/layout/(.*)$',
    '^src/app/models/(.*)$',
    '^src/app/pages/(.*)$',
    '^src/app/pipes/(.*)$',
    '^src/app/services/(.*)$',
    '^src/app/styles/(.*)$',
    '^src/app/types/(.*)$',
    '^src/app/utilities/(.*)$',
    // Third-party libraries last
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

module.exports = prettierConfig;
