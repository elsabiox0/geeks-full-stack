// copy-file.js

import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourcePath = join(__dirname, 'source.txt');
const destinationPath = join(__dirname, 'destination.txt');

try {
  const data = await readFile(sourcePath, 'utf8');
  await writeFile(destinationPath, data, 'utf8');
  console.log('File successfully copied to destination.txt');
} catch (err) {
  console.error(' Error:', err);
}
