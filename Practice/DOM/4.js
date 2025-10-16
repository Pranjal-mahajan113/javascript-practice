let todos = [];

// Add todo
function addTodo(text) {
  todos.push({ text, completed: false });
}

// Mark todo complete
function completeTodo(index) {
  if (todos[index]) todos[index].completed = true;
}

// Delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
}

// Show todos
function showTodos() {
  console.log("My Todos:");
  todos.forEach((t, i) => {
    console.log(`${i + 1}. ${t.text} ${t.completed ? "✅" : ""}`);
  });
}

// --- Testing ---
addTodo("Buy milk");
addTodo("Learn JS");
showTodos();

completeTodo(0);
showTodos();

deleteTodo(1);
showTodos();
