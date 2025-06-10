const chalk = require('chalk');

function displayColorfulMessage() {
  console.log(chalk.green.bold('This is a success message in color!'));
}

module.exports = displayColorfulMessage;