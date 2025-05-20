// Exercise 2 : Your favorite colors
// 1 - Create an array with 5 colors
let colors = ["red", "blue", "green", "yellow", "purple"];

// 2 - Loop through the array and console.log each color
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i +1} choice is ${colors[i]}`);
}

// 3 - Bonus

let suffix = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}