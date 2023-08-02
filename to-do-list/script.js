let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== '') {
    let li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="completed-btn" onclick="toggleCompleted(this)">Done</button>
      <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function toggleCompleted(button) {
  let taskTextElement = button.parentNode.querySelector('.task-text');
  taskTextElement.classList.toggle('completed');
}

function removeTask(button) {
  let listItem = button.parentNode;
  taskList.removeChild(listItem);
}

// Event listener for the "Enter" key press
taskInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
