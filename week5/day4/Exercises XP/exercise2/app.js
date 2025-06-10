import people from './data.js';

function calculateAverageAge(personArray) {
  if (personArray.length === 0) {
    console.log("No people data available.");
    return;
  }

  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personArray.length;

  console.log(`Average age is: ${averageAge.toFixed(2)} years`);
}

calculateAverageAge(people);
