// Function to check if the change is enough to buy the item
function changeEnough(itemPrice, amountOfChange) {
  // Destructure the amountOfChange array into individual coin counts
  const [quarters, dimes, nickels, pennies] = amountOfChange;

  // Calculate total value of change
  const totalChange = (quarters * 0.25) +
                      (dimes * 0.10) +
                      (nickels * 0.05) +
                      (pennies * 0.01);

  // Return true if total change is enough, else false
  return totalChange >= itemPrice;
}

// Example Calls

console.log("Example 1:");
console.log("Item price: $4.25");
console.log("Change: [25 quarters, 20 dimes, 5 nickels, 0 pennies]");
console.log("Can afford:", changeEnough(4.25, [25, 20, 5, 0])); 

console.log("\nExample 2:");
console.log("Item price: $14.11");
console.log("Change: [2 quarters, 100 dimes, 0 nickels, 0 pennies]");
console.log("Can afford:", changeEnough(14.11, [2, 100, 0, 0])); 

console.log("\nExample 3:");
console.log("Item price: $0.75");
console.log("Change: [0 quarters, 0 dimes, 20 nickels, 5 pennies]");
console.log("Can afford:", changeEnough(0.75, [0, 0, 20, 5])); 
