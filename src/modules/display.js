import { deletTodoTask } from "./deleteTask.js";
import { getListFromLocalStorage } from "./localStorage.js";
import { editTask } from "./editTask.js";
import setState from "./checkstate.js";

const taskWrapper = document.querySelector('.todo-activities');


export const display = () => {
  const mylocal = getListFromLocalStorage()
  taskWrapper.innerHTML = '';
 
  mylocal.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input', 'fas', 'fa-trash-can');
    checkbox.setAttribute('type', 'checkbox');
    if (task.checked === true) {
      checkbox.setAttribute('checked', 'checked');
    }

    checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      setState(mylocal, e.target, task.index);
      localStorage.setItem('myTodoTasks', JSON.stringify(mylocal))
      
    });

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('todotask');
    taskDesc.value = task.description;

    taskDesc.addEventListener('keydown', (e, add) => {
      if (e.keyCode === 13) {
        add.click();
      }
    });

    const deleteIcon = document.createElement('i');
    taskDesc.addEventListener('change', (e) => {
      e.preventDefault();
      editTask(e.target.value, task.index);
      taskDesc.blur();
    });

    deleteIcon.classList.add('fas', 'fa-trash-can');
    
    li.append(checkbox, taskDesc, deleteIcon);
    taskWrapper.appendChild(li);

    deletTodoTask(deleteIcon);
  });
}
