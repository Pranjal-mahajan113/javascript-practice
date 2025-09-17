// function x () {
//     var a = 7;
//     function y (){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function fakeFetch(data, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`✅ Data: ${data}`), delay);
//   });
// }

// async function getData() {
//   console.log("Start fetching...");
//   const result = await fakeFetch("User Info", 1000); // waits here
//   console.log("Received:", result);
//   console.log("Done fetching!\n");
// }

//getData();

// 🔥 Async/Await Full Understanding Example

function fakeFetch(item, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`❌ Failed to fetch: ${item}`);
      } else {
        resolve(`✅ Got: ${item}`);
      }
    }, delay);
  });
}

async function demo() {
  try {
    console.log("👉 Start Demo\n");

    // 1. Basic Await
    console.log("Step 1: Basic Await");
    const user = await fakeFetch("User Info", 1000);
    console.log(user, "\n");

    // 2. Sequential (one by one)
    console.log("Step 2: Sequential Fetch (Slower)");
    console.time("Sequential");
    const item1 = await fakeFetch("Shoes", 1000);
    console.log(item1);
    const item2 = await fakeFetch("T-shirt", 1000);
    console.log(item2);
    console.timeEnd("Sequential");
    console.log();

    // 3. Parallel (faster with Promise.all)
    console.log("Step 3: Parallel Fetch (Faster)");
    console.time("Parallel");
    const [pizza, drink] = await Promise.all([
      fakeFetch("🍕 Pizza", 1200),
      fakeFetch("🥤 Drink", 800),
    ]);
    console.log(pizza, drink);
    console.timeEnd("Parallel");
    console.log();

    // 4. Error Handling
    console.log("Step 4: Error Handling");
    const data = await fakeFetch("Server Data", 500, true);
    console.log(data); // ye line run nahi hogi
  } catch (err) {
    console.log("Caught Error:", err);
  } finally {
    console.log("\n👉 Demo Finished!");
  }
}

demo();
