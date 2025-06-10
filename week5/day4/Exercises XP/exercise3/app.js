// app.js

const { readFile, writeFile } = require('./fileManager');

// Read from "Hello World.txt"
const helloContent = readFile('Hello World.txt');

// Write new content to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
