Array.prototype.includesOneOf = function (inputArray) {
  // check empty or invalid
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    return false;
  }

  // 2loop through input array
  for (let val of inputArray) {
    if (this.includes(val)) {
      return true; // 3️⃣ found match
    }
  }

  //  no match found
  return false;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.includesOneOf([2, 8, 10])); // true
console.log(arr.includesOneOf([10, 11, 12])); // false
console.log(arr.includesOneOf([])); // false



