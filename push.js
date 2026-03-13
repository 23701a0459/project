function addFruit(fruits, newFruit) {
  fruits.push(newFruit);
  return fruits;
}

// Example usage
let fruitArray = ["apple", "banana", "mango"];
let updatedArray = addFruit(fruitArray, "orange");

console.log(updatedArray);