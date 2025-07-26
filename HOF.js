// ===============================================
// JavaScript Higher-Order Functions (HOF) Practice
// ===============================================

/*
What is a Higher-Order Function?
A Higher-Order Function is a function that:
1. Takes another function as an argument
OR
2. Returns a function

These are powerful tools in JavaScript for functional programming.
*/

// -----------------------------------------------
// 1. Function that takes another function as an argument
// -----------------------------------------------
function greet(name) {
    return "Hello, " + name;
}

function processUserInput(callback) {
    let name = "Pranjal";
    console.log(callback(name)); // Output: Hello, Pranjal
}

processUserInput(greet); // greet is passed as an argument

// -----------------------------------------------
//  2. Function that returns another function
// -----------------------------------------------
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15

// -----------------------------------------------
// 3. Using built-in HOF: map()
// - map takes a function and applies it to every element
// -----------------------------------------------
let numbers = [1, 2, 3, 4];

let squares = numbers.map(function (n) {
    return n * n;
});

console.log(squares); // Output: [1, 4, 9, 16]

// -----------------------------------------------
//  4. Using arrow function inside map
// -----------------------------------------------
let doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// -----------------------------------------------
//  5. Using filter (another HOF)
// -----------------------------------------------
let even = numbers.filter(n => n % 2 === 0);
console.log(even); // Output: [2, 4]

// -----------------------------------------------
// 6. Using reduce to sum all elements
// -----------------------------------------------
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output: 10


