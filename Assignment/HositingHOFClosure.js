// ===========================================================
//   HOISTING | HIGHER ORDER FUNCTION | CLOSURE
// ===========================================================

// ------------------------------
// 1️⃣ HOISTING
// ------------------------------

// Hoisting means: variable and function declarations are moved 
// to the top of their scope before code execution.

// Example with 'var': and let and const move to tempral dead zone its also hoist but not declare it gives refernce error
console.log(num); // Output: undefined (because 'var' is hoisted but not its value)
var num = 10;

// Behind the scenes, JavaScript does this:
// var num;   // hoisted declaration
// console.log(num); // undefined
// num = 10;

// Example with function hoisting:
sayHello(); //  Works even before declaration

function sayHello() {
  console.log("Hello World! - Function is fully hoisted");
}

// ------------------------------
// 2️⃣ HIGHER ORDER FUNCTION
// ------------------------------

// Definition: A function that takes another function as an argument 
// OR returns another function is called a Higher Order Function.

// Example:
function higherOrderFunction(callback) {
  console.log("Inside Higher Order Function...");
  callback(); // executing the callback function
}

// Callback function to pass
function greet() {
  console.log("Hi there! I am a callback function.");
}

// Passing greet as an argument
higherOrderFunction(greet);

// Another example: Using an anonymous(means no name of this function ) arrow function as callback
higherOrderFunction(() => {
  console.log("This is an inline arrow function callback!");
});

// ------------------------------
// 3️⃣ CLOSURE
// ------------------------------

// Definition: A closure is created when an inner function 
// "remembers" variables from its outer function scope 
// even after the outer function has executed.

function createCounter() {
  let count = 0; // variable inside outer function scope

  // inner function (has access to count)
  return function() {
    count++;
    console.log(`Current count: ${count}`);
  };
}

// Using closure
const counter1 = createCounter(); // creates one closure instance
const counter2 = createCounter(); // another independent closure instance

// Each counter maintains its own 'count'
counter1(); // Output: Current count: 1
counter1(); // Output: Current count: 2
counter2(); // Output: Current count: 1 (separate memory)


// Even though 'createCounter()' has finished executing,
// the returned inner function still has access to 'count' 
// because of closure behavior.



// HOISTING → JS moves declarations to top (var = undefined, function = full).
//  HOF → Function that takes or returns another function.
//  CLOSURE → Inner function remembers outer scope variables.

