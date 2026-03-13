function itemExists(arr, item) {
    return arr.includes(item);
}

// Example usage
let fruits = ["apple", "banana", "orange"];

console.log(itemExists(fruits, "banana")); // true
console.log(itemExists(fruits, "grape"));  // false