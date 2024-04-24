document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const deleteSelectedBtn = document.getElementById('delete-selected-btn');
    const filterDropdown = document.getElementById('filter-dropdown');

    function createTaskElement(taskText) {
        const newTodoItem = document.createElement('li');
        newTodoItem.classList.add('list-group-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        newTodoItem.appendChild(checkbox);

        const taskTextNode = document.createTextNode(taskText);
        newTodoItem.appendChild(taskTextNode);
        const completeButton = document.createElement('button');
        completeButton.classList.add('btn', 'btn-outline-success', 'btn-taks', 'complete-btn');
        completeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
        </svg>`;
        completeButton.addEventListener('click', function() {
            newTodoItem.classList.add('completed');
            newTodoItem.classList.remove('incomplete');
            statusText.textContent = 'Completada';
            statusText.style.color = 'green';
        });
        newTodoItem.appendChild(completeButton);
        
        const incompleteButton = document.createElement('button');
        incompleteButton.classList.add('btn', 'btn-outline-danger', 'btn-taks', 'incomplete-btn');
        incompleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>`;
        incompleteButton.addEventListener('click', function() {
            newTodoItem.classList.add('incomplete');
            newTodoItem.classList.remove('completed');
            statusText.textContent = 'Incompleta';
            statusText.style.color = 'red';
        });
        newTodoItem.appendChild(incompleteButton);
        
        newTodoItem.appendChild(incompleteButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-secondary', 'btn-delete');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>`;
        deleteButton.addEventListener('click', function() {
            newTodoItem.remove();
        });
        newTodoItem.appendChild(deleteButton);

        // Agregar un elemento span para mostrar el estado de la tarea
        const statusText = document.createElement('span');
        statusText.classList.add('status-text');
        newTodoItem.appendChild(statusText);

        return newTodoItem;
    }

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTodoText = todoInput.value;
        const newTodoItem = createTaskElement(newTodoText);
        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    });

    deleteSelectedBtn.addEventListener('click', function() {
        const selectedTasks = document.querySelectorAll('.task-checkbox:checked');
        selectedTasks.forEach(function(task) {
            task.closest('li').remove();
        });
    });

    filterDropdown.addEventListener('change', function() {
        const filterValue = filterDropdown.value;
        const allTasks = document.querySelectorAll('.list-group-item');
        allTasks.forEach(function(task) {
            if (filterValue === 'all') {
                task.style.display = 'block';
            } else if (filterValue === 'completed' && task.classList.contains('completed')) {
                task.style.display = 'block';
            } else if (filterValue === 'incomplete' && !task.classList.contains('completed')) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    });
});
