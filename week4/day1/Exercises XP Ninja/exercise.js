function mergeWords(word) {
  return function next(nextWord) {
    if (nextWord === undefined) {
      return word;
    } else {
      return mergeWords(word + ' ' + nextWord);
    }
  };
}

// Version simplifiée en arrow function (currying)
const mergeWordsCurried = (word) =>
  word === undefined
    ? ''
    : (next) => next === undefined
      ? word
      : mergeWordsCurried(`${word} ${next}`);

// Exemple d'utilisation :
console.log(mergeWordsCurried('There')('is')('no')('spoon.')()); // "There is no spoon."
console.log(mergeWordsCurried('Hello')()); // "Hello"
