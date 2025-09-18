const calculate = (a, b, operation) => {
  return operation(a, b);
};
const add = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});
console.log(add);

// ===============================================================================================

const a = [4, 1, -6, -8, 9, 10];
const firstnegative = (num) => {
  return num < 0;
};
const result = a.find(firstnegative);
console.log(result);

// ===============================================================================================
const b = [11, 22, 3, 6, 8, 9];
const multi = b.map((num1) => {
  return num1 * 2;
});
console.log(multi);

// ===============================================================================================
const c = [11, 22, 3, 6, 8, 9];
// Callback function defined separately
function double(num) {
  return num * 2;
}

const multie = c.map(double); // passing 'double' as the callback

console.log(multie); // [22, 44, 6, 12, 16, 18]
