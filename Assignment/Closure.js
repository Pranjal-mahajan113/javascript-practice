// let clousre;
// {
//   let value = "xyz";
//   clousre = () => {
//     console.log(value);
//   };
// }
// clousre();

// let obj;
// {
//   let myobj = {
//     name: "uio"
//   };
//   obj = () =>{
//     return myobj;
    
//   };

// }
// console.log(obj());




function createCounter() {
  // 'count' is declared inside the outer function (lexical scope)
  let count = 0;

  // Inner function forms a closure over 'count'
  return function inner() {
    count++;
    console.log(count);
  };
}

// Create an independent counter
const counter = createCounter();

// Each call remembers and updates the same 'count'
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
