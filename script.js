function addNewTask() {
  const input = document.getElementById('task-input');
  const list = document.getElementById('dynamic-mission-list');
  if (input.value.trim() === "") return;

  const newTask = document.createElement('div');
  newTask.className = 'task-card';
  newTask.innerHTML = `
    <div class="task-info">
      <div class="task-name">${input.value}</div>
    </div>
    <button class="start-btn">START</button>
  `;
  list.appendChild(newTask);
  input.value = "";
}
