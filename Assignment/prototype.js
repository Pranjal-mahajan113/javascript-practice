

/**
 * Helper Function: isEqual
 * ------------------------
 * Deep comparison for:
 * - Primitives (numbers, strings, booleans)
 * - Arrays (compares length and each element)
 * - Objects (compares keys and values)
 *
 * @param {*} a - first value
 * @param {*} b - second value
 * @returns {Boolean} - true if values are deeply equal
 */
function isEqual(a, b) {
  //  Primitive comparison
  if (a === b) return true;

  //  Type mismatch  not equal
  if (typeof a !== typeof b) return false;

  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Objects
  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }

  // Otherwise not equal
  return false;
}

/**
 * Main Method: includesOneOf
 * ---------------------------
 * Checks if the array contains at least one element from another array.
 * Supports primitives, arrays, and objects.
 *
 
*/
Array.prototype.includesOneOf = function (list) {
  // Early return if either array is empty
  if (!Array.isArray(list) || list.length === 0 || this.length === 0)
    return false;

  // Loop through input list and current array
  for (let val of list) {
    for (let item of this) {
      if (isEqual(item, val)) {
        return true; // ✅ Match found
      }
    }
  }

  // 3No match found
  return false;
};



// ---------- Test 1: Primitive numbers ----------
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.includesOneOf([2, 8, 10])); // true → 2 matches
console.log(arr1.includesOneOf([10, 11, 12])); // false → no match
console.log(arr1.includesOneOf([])); // false → empty input

// ---------- Test 2: Array of objects ----------
const arr2 = [
  { name: "James Bond", code: "OO7" },
  { name: "Edward Donne", code: "OO1" },
];
console.log(arr2.includesOneOf([{ name: "James Bond", code: "OO7" }])); // true
console.log(
  arr2.includesOneOf([{ name: "James Bond", code: "OO7", organization: "MI6" }])
); // false → extra key
console.log(arr2.includesOneOf([{ name: "Edward Donne", code: "OO1" }])); // true
console.log(arr2.includesOneOf([{ name: "John Doe", code: "OO2" }])); // false

// ---------- Test 3: Array of arrays ----------
const arr3 = [
  [1, 22, 33, 4],
  [4, 55, 6, 772],
];
console.log(arr3.includesOneOf([[1, 22, 33, 4]])); // true → exact match
console.log(arr3.includesOneOf([[1, 33, 22, 4]])); // false → order matters

// ---------- Test 4: Mixed types ----------
const arr4 = [1, "hello", [1, 2], { a: 1 }];
console.log(arr4.includesOneOf([2, "hello"])); // true → string matches
console.log(arr4.includesOneOf([[1, 2]])); // true → nested array matches
console.log(arr4.includesOneOf([{ a: 1 }])); // true → object matches
console.log(arr4.includesOneOf([{ a: 2 }])); // false → no match


console.log(arr4.includesOneOf([])); // false → empty input
console.log([].includesOneOf([1, 2])); // false → current array empty
