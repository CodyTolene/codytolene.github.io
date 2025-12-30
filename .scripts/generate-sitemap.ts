import { APP_DOMAIN } from '../src/app/constants/app-domain';
import { PUBLIC_SITEMAP_URLS } from '../src/app/routing/page-urls';
import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = process.env.SITE_URL ?? `https://${APP_DOMAIN}`;
const DIST_DIR = process.env.ANGULAR_DIST_DIR ?? path.join('public');

function isoDate(d = new Date()): string {
  return d.toISOString().slice(0, 10); // yyyy-mm-dd
}

function calcPriority(url: string): string {
  // Home gets top priority
  if (url === '') return '1.0';
  // Other public pages
  const depth = url.split('/').length;
  if (depth <= 1) return '0.8';
  if (depth === 2) return '0.6';
  return '0.5';
}

function changefreq(url: string): string {
  // Home changes frequently
  if (url === '') return 'weekly';
  // Static pages change less frequently
  if (url === 'privacy-policy') return 'yearly';
  return 'weekly';
}

function buildUrls(): string[] {
  return (
    PUBLIC_SITEMAP_URLS
      // Remove catch‑all and dynamic routes like "account/:id"
      .filter((u) => u !== '**' && !u.includes(':'))
      // Remove any internal only segments if you ever add them later
      .map((u) => u.trim())
  );
}

function generateXml(urls: string[]): string {
  const today = isoDate();
  const items = urls.map((u) => {
    const loc = u ? `${SITE_URL}/${encodeURI(u)}` : `${SITE_URL}/`;
    const priority = calcPriority(u);
    const freq = changefreq(u);
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${freq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    '                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
    items.join('\n'),
    '</urlset>',
    '',
  ].join('\n');
}

function ensureDir(dir: string): boolean {
  if (!fs.existsSync(dir)) {
    return fs.mkdirSync(dir, { recursive: true }) !== undefined;
  }

  return true;
}

function main(): void {
  const urls = buildUrls();
  const xml = generateXml(urls);

  ensureDir(DIST_DIR);
  const outFile = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(outFile, xml, 'utf8');

  // eslint-disable-next-line no-console
  console.log(`Generated ${outFile} with ${urls.length} URLs`);
}

main();
