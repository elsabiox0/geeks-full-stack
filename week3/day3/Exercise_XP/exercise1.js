// Function without parameters — fixed divisor (23)
function displayNumbersDivisible() {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

// Bonus: Function with a divisor parameter
function displayNumbersDivisibleWith(divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

// Running the fixed version (divisible by 23)
console.log("---- Numbers divisible by 23 ----");
displayNumbersDivisible();

// Running the bonus version with different divisors
console.log("\n---- Numbers divisible by 3 ----");
displayNumbersDivisibleWith(3);

console.log("\n---- Numbers divisible by 45 ----");
displayNumbersDivisibleWith(45);
