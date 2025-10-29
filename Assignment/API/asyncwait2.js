// Step 1: Define an async function
async function fetchUserData() {
  try {
    // Step 2: Use 'await' to wait for the fetch() promise
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Step 3: Check if response is okay
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Step 4: Convert the response into JSON
    let data = await response.json();

    // Step 5: Display the data
    console.log("Fetched User Data:", data);
  } 
  catch (error) {
    // Step 6: Handle any errors
    console.error("Error fetching data:", error);
  }
}

// Step 7: Call the async function
fetchUserData();
