let fruits = ["banana", "cherry", "kiwi", "apple"];

 for (let i=0; i < fruits.length; i++) {
   console.log(fruits[i]);
}
for(let item in fruits){
    console.log(item);
}

for(let item of fruits){
    if(item === "banana")
    console.log(item);
}

let arr = [1, 2, 3];
arr.push(5);
console.log(arr);


 let arr2 = [1, 2, 3, 4, 5];
 arr2.slice(1, 3);
 console.log(arr2);
