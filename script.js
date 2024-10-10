document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}