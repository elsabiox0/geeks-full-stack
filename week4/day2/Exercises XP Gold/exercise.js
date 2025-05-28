// Exercise 1: map method
// --------------------
console.log("Exercise 1: map method");
const mappedArray = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
console.log("Mapped Array:", mappedArray); 

// --------------------
// Exercise 2: reduce method
// --------------------
console.log("\nExercise 2: reduce method");
const reducedArray = [[0, 1], [2, 3]].reduce(
  (acc, cur) => acc.concat(cur),
  [1, 2]
);
console.log("Reduced Array:", reducedArray); 

// --------------------
// Exercise 3: map with index
// --------------------
console.log("\nExercise 3: map with index");
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(`Index: ${i}, Value: ${num}`);
  
  return num * 2;
});
console.log("New Array after map:", newArray); 

// --------------------
// Exercise 4: Nested arrays
// --------------------
console.log("\nExercise 4: Nested Arrays");

// 4.1 - Flatten to [1,2,3,[4],[5]]
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flattened = array.flat(2);
console.log("Flattened Array:", flattened); 

// 4.2 - Greeting array to sentence arrays
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const sentenceArray = greeting.map(words => words.join(" "));
console.log("Sentence Array:", sentenceArray); 

// 4.3 - Greeting array to single string
const greetingString = sentenceArray.join(" ");
console.log("Greeting String:", greetingString); 

// 4.4 - Flatten deeply nested array
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const flatTrapped = trapped.flat(Infinity);
console.log("Flattened Trapped Number:", flatTrapped); 
