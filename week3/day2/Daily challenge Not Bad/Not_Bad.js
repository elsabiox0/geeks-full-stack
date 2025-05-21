// // Daily challenge: Not Bad

// // 1 - Create sentence variable
// let sentence = "The movie is not that bad, I like it";

// // 2 - create variable wordNot
// let wordNot = sentence.indexOf("not");

// // 3 - create variable wordBad
// let wordBad = sentence.indexOf("bad");

// // 4 - If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// // For example, the result here should be : “The movie is good, I like it”
// if (wordNot < wordBad && wordNot !== -1 && wordBad !== -1) {
//     let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
//     console.log(newSentence);
// } else {
//     console.log(sentence);
// }
