// Exercise 1
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// 1.1 - Loop method
let sumHumanYearsLoop = 0;
for (let animal of data) {
  if (animal.type === 'dog') {
    sumHumanYearsLoop += animal.age * 7;
  }
}
console.log("Sum of dog ages (human years) using loop:", sumHumanYearsLoop); 

// 1.2 - Using reduce
const sumHumanYearsReduce = data.reduce((sum, animal) => {
  return animal.type === 'dog' ? sum + animal.age * 7 : sum;
}, 0);
console.log("Sum of dog ages (human years) using reduce:", sumHumanYearsReduce); 

// --------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanedEmail = userEmail3.trim(); // Removes leading/trailing whitespace
console.log("Cleaned email:", cleanedEmail); // "cannotfillemailformcorrectly@gmail.com"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 3
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const usersObject = {};
for (let user of users) {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
}
console.log("Users object with full name as key:", usersObject);
// --------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 4
const letters = ['x', 'y', 'z', 'z'];

// 4.1 - Using loop
const letterCountLoop = {};
for (let letter of letters) {
  letterCountLoop[letter] = (letterCountLoop[letter] || 0) + 1;
}
console.log("Letter count using loop:", letterCountLoop); 

// 4.2 - Using reduce
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log("Letter count using reduce:", letterCountReduce); 

