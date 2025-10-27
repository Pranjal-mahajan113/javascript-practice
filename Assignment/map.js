// Map method

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => {
  return num * 2;
});
console.log("Array :- ",numbers);
console.log("Double array :- ",result);

// filter 
const even = [1,3,57,8,0,14];
const num3 = even.filter((evenums)=>{
  return evenums % 2===0;
})
console.log("Even Number :- ",num3);

// Reduce Method

let sum = [13, 45, 56, 78, 90];
let sums = sum.reduce((total, num2) => {
  return (total += num2);
});
console.log(sum);

console.log(sums);

// object 
const student = {
  roll_no : 1,
  name : "John",
  age :20,

}

const{roll_no,name,age} = student;
console.log(`Roll No :- ${roll_no} , Name : ${name} , Age :- ${age}`);

// Spread operator
const arr1 =[1,2,4,];
const arr2 = [4,5,6];

const mergedArr = [...arr1,...arr2];
console.log(mergedArr);

