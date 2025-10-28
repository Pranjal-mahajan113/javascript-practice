// Step 1️⃣: Create a new Promise
// The Promise constructor takes a function with two parameters:
//  - resolve → called when the promise is successful
//  - reject  → called when something goes wrong

const helloPromise = new Promise((resolve, reject) => {
  let hello = true; // condition (try changing this to false)

  if (hello) {
    resolve("Hello "); // ✅ Promise fulfilled
  } else {
    reject("❌ Promise is Rejected"); // ❌ Promise rejected
  }
});

// Step 2️⃣: Consume the Promise using .then() and .catch()

helloPromise
  .then((msg) => {
    // 'msg' receives the value from resolve()
    console.log(msg + "World!"); // Output: Hello World!
  })
  .catch((err) => {
    // 'err' receives the value from reject()
    console.log(err); // Output: Promise is Rejected
  });

// -----------------------------------------------------------
// - If hello = true → resolve("Hello ") runs → then() executes
//   ✅ Output: Hello World!
//
// - If hello = false → reject("Promise is Rejected") runs → catch() executes
//   ❌ Output: Promise is Rejected
//

