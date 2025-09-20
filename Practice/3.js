// hello();
// function hello() {
//   console.log("Hello World");
// }
function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    console.log(count);
  }
}
outer();
const result = outer();
// console.log(result);
// result();

// const counter1 = outer();
// counter1();  
// counter1();  
// counter1(); 

// const counter2 = outer();
// counter2();
