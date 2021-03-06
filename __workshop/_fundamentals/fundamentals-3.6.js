// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub", return their difference.
//      - "mul", return their product.
//      - "div", return the quotient of the two numbers.
//      - Anything else return undefined.
// - If the two values are not numbers, return undefined

// For example:
// calculator(["add", 10, 20]); // 30

function calculator(arr) {
  // Your code here
  let add, sub, mul, div;
  if (arr.length > 3) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === "add") {
return add = arr[1] + arr[2];
    } else if (arr[0] === "sub") {
      return sub = arr[1] - arr[2];
    } else if (arr[0] === "mul") {
      return mul = arr[1] * arr[2];
    } else if (arr[0] === "div") {
      return div = arr[1] / arr[2]
    } else {
      return undefined;
    }
    }
  }
  console.log(calculator(["mul", 10, 15]))
  console.log(calculator(["div", 200, 40]))
  console.log(calculator(["square", 150, 10]))
  console.log(calculator(["sub", 250, 50]))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = calculator;
