function add(a , b) {
    return (a+b)
}
console.log(add(2,3));




// 1️⃣ Function Declaration
function sayHello() {
    console.log("Hello from function declaration!");
}
sayHello();

// 2️⃣ Function with Parameters and Return Value
function add(a, b) {
    return a + b;
}
console.log("Sum is:", add(2, 3)); // Output: 5

// 3️⃣ Function Expression (stored in a variable)
let greetExpression = function(name) {
    console.log("Hello, " + name + " from expression!");
};
greetExpression("Pranjal");

// 4️⃣ Arrow Function (shorter syntax)
let arrowGreet = (name) => {
    console.log("Hello, " + name + " from arrow function!");
};
arrowGreet("Pranjal");

// 5️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed immediately!");
})();

// 6️⃣ Callback Function Example
function greet(name) {
    return "Hello, " + name;
}

function sayGreeting(callback) {
    let message = callback("Pranjal");
    console.log(message);
}
sayGreeting(greet); // Output: Hello, Pranjal

// 7️⃣ Higher Order Function (HOF)
// A function that takes another function as an argument OR returns one
function higherOrder(fn) {
    console.log("I am a Higher Order Function.");
    fn(); // calling the callback
}

function lowerOrder() {
    console.log("I am passed as a callback.");
}

higherOrder(lowerOrder);

// 8️⃣ Real-Life Style Function
function calculateBill(totalAmount, taxPercentage) {
    let tax = totalAmount * (taxPercentage / 100);
    return totalAmount + tax;
}
console.log("Total Bill:", calculateBill(100, 5)); // Output: 105
