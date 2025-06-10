// fileManager.js

const fs = require('fs');
const path = require('path');

function readFile(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    const content = fs.readFileSync(absolutePath, 'utf8');
    console.log(`Read from ${filePath}:\n${content}`);
    return content;
  } catch (err) {
    console.error(` Error reading file: ${filePath}`, err);
    return null;
  }
}

function writeFile(filePath, content) {
  try {
    const absolutePath = path.resolve(filePath);
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log(` Written to ${filePath}:\n${content}`);
  } catch (err) {
    console.error(`Error writing to file: ${filePath}`, err);
  }
}

module.exports = {
  readFile,
  writeFile
};
