const chalk = require('chalk')

function welcome()
{
console.log(chalk.red('..........................................................................................................................................'));
console.log(chalk.yellow('..@@@@@@@@..@@@@@@@......@@@@......@@@....@@@..............@@@@@@@@@.....@@@@@@@@.......@@@@@......@@@@@@@@..@@...@@........@@@@@@@@...'));
console.log(chalk.yellow('.....@@.....@@..........@@..@@.....@@.@..@.@@..............@@......@@....@@.....@@....@@.....@@....@@........@@...@@........@@.........'));
console.log(chalk.yellow('.....@@.....@@@@@@@....@@@@@@@@....@@..@@..@@..............@@@@@@@@@.....@@@@@@@@...@@.........@@..@@@@@@@@..@@...@@........@@@@@@@@...'));
console.log(chalk.yellow('.....@@.....@@........@@......@@...@@......@@..............@@............@@...@@.....@@.......@@...@@........@@...@@........@@.........'));
console.log(chalk.yellow('.....@@.....@@@@@@@..@@........@@..@@......@@..............@@............@@.....@@......@@@@@......@@........@@...@@@@@@@@..@@@@@@@@...'));
console.log(chalk.red('..........................................................................................................................................'));
console.log(chalk.yellow('..................@@@@@@@@@....@@@@@@@@..@@@....@@...@@@@@@@@...@@@@@@@@.......@@@@.....@@@@@@@@.....@@@@@.....@@@@@@@@................'));
console.log(chalk.yellow('..................@@...........@@........@@.@...@@...@@.........@@.....@@.....@@..@@.......@@......@@.....@@...@@.....@@...............'));
console.log(chalk.yellow('..................@@...@@@@@...@@@@@@@@..@@..@..@@...@@@@@@@@...@@@@@@@@.....@@@@@@@@......@@....@@.........@@.@@@@@@@@................'));
console.log(chalk.yellow('..................@@.......@@..@@........@@...@.@@...@@.........@@...@@.....@@......@@.....@@.....@@.......@@..@@...@@.................'));
console.log(chalk.yellow('..................@@@@@@@@@....@@@@@@@@..@@....@@@...@@@@@@@@...@@.....@@..@@........@@....@@........@@@@@.....@@.....@@...............'));
console.log(chalk.red('..........................................................................................................................................'));
}

module.exports = welcome;