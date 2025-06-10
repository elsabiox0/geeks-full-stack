import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const files = await readdir(__dirname);
  console.log('Files in directory:');
  files.forEach(file => console.log(`- ${file}`));
} catch (err) {
  console.error('Error reading directory:', err);
}
