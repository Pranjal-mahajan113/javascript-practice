// ----------------------------
// JavaScript Variables
// ----------------------------

// 1. var - function scoped
var name = "Pranjal";
console.log("var:", name); // Output: Pranjal

var name = "Mahajan"; // Re-declared allowed
console.log("var (re-declared):", name); // Output: Mahajan

// 2. let - block scoped
let age = 22;
console.log("let:", age); // Output: 22

age = 23; // Allowed (re-assignment)
console.log("let (re-assigned):", age); // Output: 23

// let age = 24;  Not allowed: re-declaration in same block

// 3. const - block scoped and cannot be re-assigned
const country = "India";
console.log("const:", country); // Output: India

// country = "Bharat";  Error: Assignment to constant variable
// const country = "USA"; Error: Identifier 'country' has already been declared

// ----------------------------
// Scope Example
// ----------------------------
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log("var outside block:", a); // ✅ Accessible
// console.log(b);  Error
// console.log(c);  Error

// ----------------------------
// Summary
// ----------------------------
/*
| Keyword | Re-declare | Re-assign | Scope     |
|---------|------------|-----------|-----------|
| var     | Yes        | Yes       | Function  |
| let     | No         | Yes       | Block     |
| const   | No         | No        | Block     |
*/

// Tip: Always use `let` and `const`. Avoid `var` in modern JS.
