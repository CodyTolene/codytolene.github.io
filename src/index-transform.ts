import { TargetOptions } from '@angular-builders/custom-webpack';
import { DefaultPageMeta } from './shared/constants';
import { environment } from './environments/environment';

/**
 * Mutate `index.html` with production elements on `ng-build`
 */

const pageMeta = `
<title>${DefaultPageMeta.title}</title>
<meta name="description" content="${DefaultPageMeta.description}" />
<meta name="author" content="${DefaultPageMeta.author}" />
<meta name="keywords" content="${DefaultPageMeta.keywords.toString()}" />`;

const pageAnalytics = `<script
  type="text/javascript"
  async
  src="https://www.googletagmanager.com/gtag/js?id=${DefaultPageMeta.googleAnalyticsId}"
></script>
<script type="text/javascript">
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
</script>`;

module.exports = (_targetOptions: TargetOptions, indexHtml: string) => {
  let currentFormattedHtml = indexHtml;
  let slicedTop: string;
  let slicedBottom: string;
  /**
   * Inject default page meta from our constants file to be set dynamically on build.
   * Injected meta tags are supplied directly below the `<head>` tag within the `head` element.
   */
  const headElementStart = '<head>';
  const headElementStartPosition =
    currentFormattedHtml.indexOf(headElementStart) +
    headElementStart.length +
    1;
  slicedTop = currentFormattedHtml.slice(0, headElementStartPosition);
  slicedBottom = currentFormattedHtml.slice(headElementStartPosition);
  currentFormattedHtml = `${slicedTop}${pageMeta}${slicedBottom}`;
  /**
   * Inject Google Analytics script tags.
   * Injected script tags are supplied directly above the closing tag `</head>`.
   */
  const headElementEnd = '</head>';
  const headElementEndPosition = currentFormattedHtml.indexOf(headElementEnd);
  slicedTop = currentFormattedHtml.slice(0, headElementEndPosition);
  slicedBottom = currentFormattedHtml.slice(headElementEndPosition);
  currentFormattedHtml = `${slicedTop}${pageAnalytics}${slicedBottom}`;

  return currentFormattedHtml;
};
