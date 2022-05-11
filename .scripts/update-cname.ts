import { writeFileSync } from 'fs';
import { getDataFromFile } from './get-data-from-file';

// Run this method via node (see `../package.json` for usage)
updateCNAME();

async function updateCNAME(): Promise<void> {
  console.log('Generating and updating CNAME.');

  // Current list of page urls
  const pageUrls = (
    await getDataFromFile<PagesJson>('./src/core/pages/pages.json')
  ).pages;

  // Generate the CNAME file.
  generateCNAME('src/CNAME', pageUrls);

  // Fin
  console.log('Completed updating CNAME.');
}

/**
 * Create a new CNAME file that contains all site directories.
 *
 * @param fileDirectory Directory of the CNAME file
 * @param pageUrls Array of sitemap URLs to add to the sitemap.
 */
function generateCNAME(
  fileDirectory: string,
  siteMapUrls: readonly string[]
): void {
  const cnameContent = siteMapUrls.map((url) => `${url}\n`).toString();
  writeFileSync(fileDirectory, cnameContent);
}

type PagesJson = {
  pages: readonly string[];
};
