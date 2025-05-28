const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display the colors with their order
console.log("Displaying colors with their order:");
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

console.log("\n-------------------------\n"); 

// 2. Check if "Violet" is in the array
const hasViolet = colors.some(color => color === "Violet");

if (hasViolet) {
  console.log("Yeah");
} else {
  console.log("No...");
}