// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos HTML que necesitamos
    const todoForm = document.getElementById('todo-form'); // El formulario donde ingresamos nuevas tareas
    const todoInput = document.getElementById('todo-input'); // El campo de entrada para escribir nuevas tareas
    const todoList = document.getElementById('todo-list'); // La lista donde se muestran las tareas
    const deleteSelectedBtn = document.getElementById('delete-selected-btn'); // El botón para eliminar tareas seleccionadas

    // Agregar un evento al formulario para manejar el envío de nuevas tareas
    todoForm.addEventListener('submit', function(event) {
        // Prevenir el comportamiento predeterminado del formulario (evitar que se recargue la página)
        event.preventDefault();

        // Obtener el texto de la nueva tarea ingresada por el usuario
        const newTodoText = todoInput.value;

        // Crear un nuevo elemento de lista para la nueva tarea
        const newTodoItem = document.createElement('li');
        newTodoItem.classList.add('list-group-item'); // Agregar la clase CSS para dar estilo al elemento de lista
        newTodoItem.textContent = newTodoText; // Establecer el texto de la nueva tarea en el elemento de lista

        // Crear un checkbox para marcar la tarea como completada
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox'); // Agregar la clase CSS para dar estilo al checkbox
        newTodoItem.appendChild(checkbox); // Agregar el checkbox al elemento de lista

        // Crear un botón para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-delete'); // Agregar las clases CSS para dar estilo al botón
        deleteButton.textContent = 'Eliminar'; // Establecer el texto del botón
        newTodoItem.appendChild(deleteButton); // Agregar el botón al elemento de lista

        // Agregar el elemento de lista con la nueva tarea a la lista de tareas
        todoList.appendChild(newTodoItem);

        // Limpiar el campo de entrada después de agregar la nueva tarea
        todoInput.value = '';
    });

    // Agregar un evento a la lista de tareas para manejar los clics en los checkboxes y botones de eliminación
    todoList.addEventListener('click', function(event) {
        // Obtener el elemento que se ha hecho clic
        const clickedElement = event.target;

        // Si se hace clic en un checkbox, marcar o desmarcar la tarea como seleccionada
        if (clickedElement.classList.contains('task-checkbox')) {
            const listItem = clickedElement.closest('li');
            listItem.classList.toggle('selected'); // Alternar la clase 'selected' para mostrar u ocultar la selección visualmente
        }

        // Si se hace clic en un botón de eliminar, eliminar la tarea correspondiente
        if (clickedElement.classList.contains('btn-delete')) {
            const listItem = clickedElement.closest('li');
            listItem.remove(); // Eliminar el elemento de lista que contiene la tarea
        }
    });

    // Función para eliminar todas las tareas seleccionadas
    function deleteSelectedTasks() {
        // Obtener todas las tareas seleccionadas
        const selectedTasks = document.querySelectorAll('.selected');

        // Iterar sobre todas las tareas seleccionadas y eliminarlas una por una
        selectedTasks.forEach(function(task) {
            task.remove(); // Eliminar la tarea
        });
    }

    // Agregar un evento al botón para eliminar todas las tareas seleccionadas
    deleteSelectedBtn.addEventListener('click', deleteSelectedTasks);
});
