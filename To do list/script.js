let tasks = [];

document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('task-input').value.trim();
    
    if (taskInput !== '') {
        tasks.push({ description: taskInput, isCompleted: false });
        displayTasks();
        document.getElementById('task-input').value = ''; 
    }
});

function displayTasks() {
    let taskList = '';

    for (let i = 0; i < tasks.length; i++) {
        taskList += `<li data-id="${i}">
                        <input type="checkbox" class="complete-task" ${tasks[i].isCompleted ? 'checked' : ''}>
                        <span class="${tasks[i].isCompleted ? 'task-done' : ''}">${tasks[i].description}</span>
                        <button class="remove-task" data-id="${i}">Remove</button>
                    </li>`;
    }

    document.getElementById('task-list').innerHTML = taskList;
}

document.getElementById('task-list').addEventListener('click', function(event) {
    let element = event.target;

    if (element.classList.contains('complete-task')) {
        let index = element.parentNode.getAttribute('data-id');
        tasks[index].isCompleted = element.checked;
        displayTasks();
    }

    if (element.classList.contains('remove-task')) {
        let index = element.getAttribute('data-id');
        tasks.splice(index, 1);
        displayTasks();
    }
});

displayTasks();
