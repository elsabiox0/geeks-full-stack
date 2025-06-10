// app.js

// 1. Require dyal ga3 l'modules dyawlna
const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const readFileContent = require('./read-file.js');

// 2. Kanakhdo l'argument men l'command line (dakchi li katkteb mor node app.js)
const task = process.argv[2]; // howa 'task1' aw 'task2' aw 'task3'

// 3. Kanst3emlo switch bach nkhtar chmen task ykhedem
switch (task) {
  case 'task1':
    console.log('--- Running Task 1: Greeting ---');
    const userName = 'Developer';
    console.log(greet(userName));
    break;

  case 'task2':
    console.log('--- Running Task 2: Colorful Message ---');
    displayColorfulMessage();
    break;

  case 'task3':
    console.log('--- Running Task 3: Read File ---');
    readFileContent();
    break;

  default:
    console.log('--------------------------------------------------');
    console.log('ERROR: Ma khtariti walo aw khtariti chihaja ghalta.');
    console.log('Bach tkheddem task, khtar wahed men hado:');
    console.log('  node app.js task1');
    console.log('  node app.js task2');
    console.log('  node app.js task3');
    console.log('--------------------------------------------------');
    break;
}