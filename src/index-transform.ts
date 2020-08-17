import { TargetOptions } from '@angular-builders/custom-webpack';
import { defaultPageMeta } from './shared/constants';

const pageMeta = `<title>${defaultPageMeta.title}</title>
<meta name="description" content="${defaultPageMeta.description}" />
<meta name="author" content="${defaultPageMeta.author}" />
<meta name="keywords" content="${defaultPageMeta.keywords.toString()}" />`;

/**
 * Inject default page meta from our constants file to be set dynamically on build.
 * Injected meta tags are supplied directly below the `<head>` tag within the `head` element.
 */
module.exports = (_targetOptions: TargetOptions, indexHtml: string) => {
  const headElementStart = '<head>';
  const headPosition =
    indexHtml.indexOf(headElementStart) + headElementStart.length + 1;
  return `${indexHtml.slice(0, headPosition)}${pageMeta}${indexHtml.slice(
    headPosition,
  )}`;
};
