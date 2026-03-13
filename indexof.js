function getWordIndex(array, word) {
  return array.indexOf(word);
}

// Example
let words = ["apple", "banana", "cherry", "date"];
let index = getWordIndex(words, "cherry");

console.log(index);