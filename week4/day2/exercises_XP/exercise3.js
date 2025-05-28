const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output should be : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'](spread operator will insert the elements of the arrays into the new array at that position)

const country = "USA";
console.log([...country]);
// Output should be : ['U', 'S', 'A'] (spread operator will convert the string into an array of characters)

let newArray = [...[,,]];
console.log(newArray);
// Output should be : [undefined, undefined] (spread operator will create an array with two empty slots, which are filled with undefined values)
