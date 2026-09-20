// TeamTask - script.js
// GIAI DOAN 3: Nhanh feature/xoa-hoan-thanh (C) - tach tu ban khung ban dau, lam SONG SONG voi B

let tasks = [];

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

// C khong dung vao ham nay - van la ban khung do A tao
function addTask() {
  // chua xu ly gi ca
}

// C chinh renderTasks() de them checkbox danh dau hoan thanh va nut xoa
function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(function (task, index) {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function () {
      toggleComplete(index);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Xoa';
    deleteBtn.addEventListener('click', function () {
      deleteTask(index);
    });

    li.prepend(checkbox);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
