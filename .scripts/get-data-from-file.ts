import { readFileSync } from 'fs';

export function getDataFromFile<R>(fileDirectory: string): R {
  try {
    const file = readFileSync(fileDirectory, 'utf8');
    const parsed = JSON.parse(file) as R;
    return parsed;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to parse file from "${fileDirectory}". See log.`);
  }
}
