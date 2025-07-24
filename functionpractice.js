// ===============================================
// JavaScript Functions Practice File
// ===============================================

// -----------------------------------------------
// 1. Function Declaration
// - Can be called before it is defined (hoisted)
// -----------------------------------------------
function sampleFunction() {
    console.log("hello");
}

sampleFunction(); // Output: hello

// -----------------------------------------------
// 2. Function Expression
// - Stored in a variable
// - Not hoisted (must be defined before calling)
// -----------------------------------------------
let funexpression = function () {
    console.log("hello exp");
}

funexpression(); // Output: hello exp

// -----------------------------------------------
//  3. Arrow Function 
// - Shorter syntax
// - Inherits `this` from surrounding scope (lexical)
// -----------------------------------------------
let arrowfun = () => {
    console.log("hello i am arrow");
}

arrowfun(); // Output: hello i am arrow

// -----------------------------------------------
//  4. IIFE (Immediately Invoked Function Expression)
// - A function that runs immediately after it's defined
// - Used to avoid polluting the global scope
// -----------------------------------------------
(function () {
    console.log("hello from IIFE");
})(); // Output: hello from IIFE

//  Explanation of IIFE:
// - It's a function wrapped in parentheses `()`
// - Followed by another set of parentheses `()` to invoke it immediately
// - Useful for one-time tasks or isolating variables

/*
Example Use Case:
(function() {
    let secret = "I am private!";
    console.log(secret); // Accessible here
})();

console.log(secret); // ❌ Error: secret is not defined
*/

