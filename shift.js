function removeFirstItem(arr) {
  arr.shift();
  return arr;
}

// Example
let fruits = ["apple", "banana", "mango", "orange"];
let result = removeFirstItem(fruits);

console.log(result);