const formToDoList = document.getElementById('toDoListForm');
formToDoList.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
    const titleTask = document.getElementById('title-task').value;
    const descriptionTask = document.getElementById('description-task').value;
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerHTML = `
    <div class="task-list-info">
      <h5>${titleTask}</h5>
      <p>
        ${descriptionTask}
      </p>
    </div>
    <div>
      <button class="edit-button">EDIT</button><button>DELETE</button>
    </div>`;
    taskList.appendChild(listItem);
    const titulo= document.getElementById('title-task');
    const description = document.getElementById('description-task');
    titulo.value = '';
    description.value = '';
    
    console.log(listItem);
}

