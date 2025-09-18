// let a = 10;

// function test() {
//   let b= 20;   // inner scope variable
//   console.log(b); // 
// }

// test();
// console.log(a);   




let v = 10 ;
function demo () {
  let v = 100;
  console.log(v);
}
demo ();


// Shadowing happens when a variable in an inner scope has the same name as a variable in an outer scope. The inner one temporarily hides the outer one within that scope, but it doesn’t overwrite it."

// 2. Give a Simple Example
// let a = 10;

// function demo() {
//   let a = 20;   // shadows outer 'a'
//   console.log(a); // 20
// }

// demo();
// console.log(a);   // 10


// 👉 Inside demo, a = 20 shadows the outer a = 10.
// Outside, the original a is still safe.

// 3. Show a Block Scope Example
// let x = 5;

// {
//   let x = 100;  // shadows outer x
//   console.log(x); // 100
// }

// console.log(x); // 5


// 👉 Inner block’s x hides the outer one only in that block.

// 4. Explain Illegal Shadowing

// "If you try to shadow a let or const with var, it throws an error because var is function-scoped and leaks outside the block."

// let y = 10;

// {
//   var y = 20;  // ❌ SyntaxError
// }

// 5. End with a Summary Line

// "So shadowing is allowed when the same type is used (let → let, var → var), but it becomes illegal when you mix var with let or const in the same scope."

// 💡 Pro Tip (Interview Style):
// After explaining, you can add:
// "Closures are different — they don’t hide variables, instead they remember outer variables even after the outer function has finished. Shadowing hides, Closures preserve."


function counter() {
  let count = 0;   // part of lexical scope
  return function() {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1()); // 1
console.log(c1()); // 2
