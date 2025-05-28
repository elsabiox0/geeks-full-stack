// Exercise 1 : 
const landscapeArrow = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log("Exercise 1 Output:", landscapeArrow()); 

// -----------------------------------------------------------------------------------------------------
// Exercise 2 : 
console.log("--- Exercise 2 ---");
const addTo = x => y => x + y;
const addToTen = addTo(10);
const resultEx2 = addToTen(3);
console.log("addToTen(3):", resultEx2); 

// -----------------------------------------------------------------------------------------------------
// Exercise 3 : 
console.log("--- Exercise 3 ---");
const curriedSumEx3 = (a) => (b) => a + b;
const resultEx3 = curriedSumEx3(30)(1);
console.log("curriedSumEx3(30)(1):", resultEx3); 

// -----------------------------------------------------------------------------------------------------
// Exercise 4 :
console.log("--- Exercise 4 ---");
const curriedSumEx4 = (a) => (b) => a + b;
const add5Ex4 = curriedSumEx4(5);
const resultEx4 = add5Ex4(12);
console.log("add5Ex4(12):", resultEx4); 

// -----------------------------------------------------------------------------------------------------
// Exercise 5 :
console.log("--- Exercise 5 ---");
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5Compose = (num) => num + 5;
const resultEx5 = compose(add1, add5Compose)(10);
console.log("compose(add1, add5Compose)(10):", resultEx5); 
// -----------------------------------------------------------------------------------------------------