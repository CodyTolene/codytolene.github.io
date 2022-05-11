// TODO: Use these imports instead.
//import { readFileSync, writeFileSync } from 'fs';
const { readFileSync, writeFileSync } = require('fs');
const domain = 'codytolene';

// Run this method via node (see `../package.json` for usage)
updateSitemap();

async function updateSitemap(): Promise<void> {
  console.log('Generating and updating sitemap.');

  // Current Date: YYYY-MM-DD
  const todaysDate = new Date().toISOString().split('T')[0];
  // Current List of Pages
  const pages = (await getDataFromFile<PagesJson>('./.sitemap/pages.json'))
    .pages;
  const pageUrls: readonly SitemapUrl[] = pages.map((page) => ({
    loc: page,
    lastmod: todaysDate,
    priority: 1,
  }));

  // We have to split sitemaps that are too large, chunk into groups of 5,000.
  // The max that Google allows per file is 50,000 I believe, but we'll do
  // 5,000 to keep things simple for now (even though this site will probably
  // never have that many urls, haha).
  const chunkedUrls = chunk(pageUrls, 5000);
  const getSitemapPageFilename = (i: number) => `page-list-${i}.xml`;
  const sitemapFilenames: string[] = [];

  // Generate sitemap files for the page urls
  for (let i = 0; i < chunkedUrls.length; i++) {
    const sitemapFilename = getSitemapPageFilename(i + 1);
    sitemapFilenames.push(sitemapFilename);
    generateSitemapFile(
      `src/assets/sitemap/${sitemapFilename}`,
      chunkedUrls[i]
    );
  }

  // Generate sitemap index to indclude all sitemap files generated above
  generateSitemapIndex('src/sitemap.xml', [
    ...sitemapFilenames.map(
      (sitemapFilename) =>
        `https://www.${domain}.com/assets/sitemap/${sitemapFilename}`
    ),
  ]);

  // Fin
  console.log('Completed updating sitemap.');
}

/**
 * Create a new sitemap index that contains child sitemaps.
 *
 * @param sitemapFileDirectory Directory of the sitemap xml file
 * @returns true when successful
 */
function generateSitemapIndex(
  fileDirectory: string,
  sitemapFileDirectories: readonly string[]
): void {
  const sitemapsXML = sitemapFileDirectories.map(
    (sitemapFileDirectory) =>
      `  <sitemap>\n` +
      `    <loc>${sitemapFileDirectory}</loc>\n` +
      `  </sitemap>`
  );
  const sitemapsArrayXML =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${sitemapsXML.join('\n')}\n` +
    `</sitemapindex>\n`;

  // Note if the directory doesn't pre-exist, this will fail!
  writeFileSync(fileDirectory, sitemapsArrayXML);
}

/**
 * Create a new sitemap containing an array of urls.
 *
 * @param fileDirectory Output file directory.
 * @param siteMapUrls Array of sitemap URLs to add to the sitemap.
 */
function generateSitemapFile(
  fileDirectory: string,
  siteMapUrls: readonly SitemapUrl[]
): void {
  const sitemapUrlsXML = siteMapUrls.map(
    (siteMapUrl) =>
      `  <url>\n` +
      `    <loc>${siteMapUrl.loc}</loc>\n` +
      (!siteMapUrl.lastmod
        ? ''
        : `    <lastmod>${siteMapUrl.lastmod}</lastmod>\n`) +
      (!siteMapUrl.changefreq
        ? ''
        : `    <changefreq>${siteMapUrl.changefreq}</changefreq>\n`) +
      (!siteMapUrl.priority
        ? ''
        : `    <priority>${siteMapUrl.priority}</priority>\n`) +
      `  </url>`
  );
  const sitemapXML =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${sitemapUrlsXML.join('\n')}\n` +
    `</urlset>\n`;

  writeFileSync(fileDirectory, sitemapXML);
}

function getDataFromFile<R>(fileDirectory: string): R {
  try {
    const file = readFileSync(fileDirectory, 'utf8');
    const parsed = JSON.parse(file) as R;
    return parsed;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to parse file from "${fileDirectory}". See log.`);
  }
}

function chunk<T>(array: readonly T[], chunkSize: number): readonly T[][] {
  return array.reduce<T[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}

type PagesJson = {
  pages: readonly string[];
};

// https://www.sitemaps.org/protocol.html#xmlTagDefinitions
type SitemapUrl = {
  /**
   *  How frequently the page is likely to change.
   *  Valid format is `YYYY-MM-DD`.
   */
  changefreq?: ChangeFrequency;
  /** The date of last modification of the file. */
  lastmod?: string;
  /** URL of the page. */
  loc: string;
  /**
   *  The priority of this URL relative to other URLs on your site.
   *  Valid values are from 0.0 to 1.0.
   */
  priority?: number;
};

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';
