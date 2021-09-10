console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jo!"', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('Test - should add 3 and 4 together and print "7"', addNumbers(3, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('Test - should multiply 2 times 3 times 4 and print "24"', multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true; // will only return true if number is greater than 0
  }
  return false; // will return false if number is 0 or not greater than 0
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) { // test whether array is empty
    return array[array.length - 1];
  }
  // will return undefined by default
}
console.log('Test - should return 5, last element in array [1,2,3,4,5]', getLast([1, 2, 3, 4, 5]));
console.log('Test - should return undefined', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (const item of array) { // loop through and test each element (item) in the array
    if (item === value) {
      return true; // will return as soon as it finds a match
    }
  }
  return false; // will return false if no matches were found
}
console.log('Test - should return true for value: 4, array: [5,6,4,3]', find(4, [5, 6, 4, 3]));
console.log('Test - should return true for value: "cat", array: ["dog", "cat", "parrot", "tortoise"]', find('cat', ["dog", "cat", "parrot", "tortoise"]));
console.log('Test - should return false for value: 6, array: [4,5,2]', find(6, [4, 5, 2]));
console.log('Test - should return false for value: "cat", array: ["snake", "giraffe", "horse"]', find('cat', ["snake", "giraffe", "horse"]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) { // compare the first letter of string at index 0 with letter
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  let sum = 0; // will hold total
  // TODO: loop to add items
  for (const num of arr) { // loops through
    sum += num; // and adds each element in array to the total, sum
  }
  return sum;
}
console.log('Test - should return 7 for [1,2,3,1]', sumAll([1, 2, 3, 1]));
console.log('Test - should return 12 for [4,3,1,2,2]', sumAll([4, 3, 1, 2, 2]));

// this also sounds like .reduce(), but I guess technically not a loop :)
// correction! .reduce() is a loop (just a different type)
// was good practice to write it, though
function sumAllReduce(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}
console.log('Test - should return 7 for [1,2,3,1]', sumAllReduce([1, 2, 3, 1]));
console.log('Test - should return 12 for [4,3,1,2,2]', sumAllReduce([4, 3, 1, 2, 2]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function addPositives(arr) {
  let positives = []; // array to hold all positives
  for (const num of arr) { // loop through given array
    if (num > 0) { // check if num is positive, i.e. greater than 0
      positives.push(num); // if positive, add to the holder array
    }
  }
  return positives; // will return empty array if no numbers are greater than 0
}
console.log('Test - should return [3,2] for [-1, 3, 0, 2]', addPositives([-1, 3, 0, 2]));
console.log('Test - should return [] for [-1, -4, 0, -2]', addPositives([-1, -4, 0, -2]));
console.log('Test - should return [] for []', addPositives([]));

// as with question 9, this sounds like an Array method, .filter():
// this is how I would do that:
function addPositivesFilter(arr) {
  return arr.filter(item => item > 0); // will return all items > 0 in a new array
  // will return empty array if nothing passes filter
}
console.log('Test - should return [3,2] for [-1, 3, 0, 2]', addPositivesFilter([-1, 3, 0, 2]));
console.log('Test - should return [] for [-1, -4, 0, -2]', addPositivesFilter([-1, -4, 0, -2]));
console.log('Test - should return [] for []', addPositivesFilter([]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// This is the kata on Codewars: https://www.codewars.com/kata/5825792ada030e9601000782
//Below, in the block comment, are the instructions:
/*
Implement zipWith
zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Input validation
Assume all input is valid.
*/

// The starter function on Codewars looks like this:
/*
function zipWith(fn,a0,a1) {
  return [];
}
*/

// this was my solution that passed the Codewars tests
function zipWith(fn, a0, a1) {
  const zippedArray = []; // the array to return
  let length = Math.min(a0.length, a1.length); // find the shortest array's length
  // only iterate until reaching the end of the shortest array
  for (let i = 0; i < length; i++) {
    zippedArray.push(fn(a0[i], a1[i])); // perform callback function
  }
  return zippedArray;
}

// Below are my own tests:
console.log('Should produce [5, 11, 10, 10] when passed arrays [2, 7, 5, 4] and [3, 4, 5, 6, 7] and function addNumbers from question 3', zipWith(addNumbers, [2, 7, 5, 4], [3, 4, 5, 6, 7]));
console.log('Should produce [6, 28, 25, 24] when passed arrays [2, 7, 5, 4, 12] and [3, 4, 5, 6] and anonymous function to multiply two numbers',
  zipWith((num1, num2) => num1 * num2, [2, 7, 5, 4, 12], [3, 4, 5, 6]));