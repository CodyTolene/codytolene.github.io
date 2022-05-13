import { writeFileSync } from 'fs';

const githubCustomDomain = 'www.codytolene.com';

// Run this method via node (see `../package.json` for usage)
updateCNAME();

async function updateCNAME(): Promise<void> {
  console.log('Generating and updating CNAME.');

  // Generate the CNAME file.
  generateCNAME('src/CNAME', githubCustomDomain);

  // Fin
  console.log('Completed updating CNAME.');
}

/**
 * Create a new CNAME file that contains all site directories.
 *
 * @param fileDirectory Directory of the CNAME file
 * @param domain Domain of directory for custom domain.
 */
function generateCNAME(fileDirectory: string, domain: string): void {
  writeFileSync(fileDirectory, domain + '\n');
}
