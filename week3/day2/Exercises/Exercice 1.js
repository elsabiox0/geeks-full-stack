const individuals = ["Greg", "Mary", "Devon", "James"];

//  Section 1: Array Manipulations

// 1. Eliminate "Greg" from the array
individuals.splice(0, 1);
console.log(individuals);

// 2. Substitute "James" with "Jason"
individuals[individuals.length - 1] = "Jason";
console.log(individuals);

// 3. Append "Mohammed" to the array
individuals.push("Mohammed");
console.log(individuals);

// 4. Retrieve the index of "Mary"
console.log(individuals.indexOf("Mary"));

// 5. Create a new array excluding "Mary" and "Mohammed"
const selectedIndividuals = individuals.slice(1, 3);
console.log(selectedIndividuals);

// 6. Attempt to find the index of "Foo"
console.log(individuals.indexOf("Foo")); // Returns -1 since "Foo" is not present

// 7. Assign the last element to a variable
const finalPerson = individuals[individuals.length - 1];
console.log(finalPerson);

//  Section 2: Iterating Over the Array

// 1. Display each individual in the array
for (let index = 0; index < individuals.length; index++) {
  console.log(individuals[index]);
}

// 2. Display individuals until "Devon" is encountered
for (let index = 0; index < individuals.length; index++) {
  console.log(individuals[index]);
  if (individuals[index] === "Devon") {
    break;
  }
}
