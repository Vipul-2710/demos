// ===== DOM Elements =====
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ===== Data Array =====
let tasks = [];

// ===== Event Listeners =====
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") addTask();
});

// ===== Function: Add New Task =====
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Add task to array
  const newTask = { id: Date.now(), text: taskText, completed: false };
  tasks.push(newTask);

  // Re-render the list
  renderTasks();

  // Clear input
  taskInput.value = "";
}

// ===== Function: Render All Tasks =====
function renderTasks() {
  // Clear old list
  taskList.innerHTML = "";

  // Create DOM elements for each task
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    // Add completed style if true
    if (task.completed) li.classList.add("completed");

    // Toggle completed on click
    li.addEventListener("click", () => toggleComplete(task.id));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    // Attach delete event
    deleteBtn.addEventListener("click", e => {
      e.stopPropagation(); // prevent li click
      deleteTask(task.id);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// ===== Function: Toggle Completion =====
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// ===== Function: Delete Task =====
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}
