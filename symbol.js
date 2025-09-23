const name = "Pranjal";
const iterator = name[Symbol.iterator]();

console.log(iterator.next()); // { value: 'P', done: false }
console.log(iterator.next()); // { value: 'r', done: false }
