import './style.css';
import  setState  from './modules/checkstate.js';


let todoTask = [];
const taskWrapper = document.querySelector('.todo-activities');
const newTask = document.getElementById('task-description');
const newTaskBtn = document.getElementById('new-task');
const reset = document.getElementById('refresh');
const clearAll = document.querySelector(".clear-completed-task");



const clearallTask = () => {
  todoTask = [];
};

const addListToLocalStorage = () => {
  localStorage.setItem('myTodoTasks', JSON.stringify(todoTask));
};
const getListFromLocalStorage = () => {
  if (localStorage.getItem('myTodoTasks')) {
    todoTask = Array.from(JSON.parse(localStorage.getItem('myTodoTasks')));
  }
  return todoTask;
};

const refreshItems = (todoTask) => {
  for (let i = 0; i < todoTask.length; i += 1) {
    const indexes = i + 1;
    todoTask[i].index = indexes;
  }
};
//
// Edit Task
const editTask = (taskdescription, index) => {
  for (let j = 0; j < todoTask.length; j += 1) {
    if (todoTask[j] === index) {
      todoTask[j] += '*';
    }
    todoTask[index - 1].description = taskdescription;
    addListToLocalStorage();
  }
};
// Read Items
const createTask = () => {
  taskWrapper.innerHTML = '';
  const mylocal = getListFromLocalStorage();
  mylocal.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input', 'fas', 'fa-trash-can');
    checkbox.setAttribute('type', 'checkbox');
    if (task.checked === true) {
      checkbox.setAttribute('checked', 'checked');
    }

    checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      setState(todoTask, e.target, task.index);
      addListToLocalStorage();
    });

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('todotask');
    taskDesc.value = task.description;


    // add todo also on enter key event
  taskDesc.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      add.click();
    }
  });

    const deleteTask = document.createElement('i');
    taskDesc.addEventListener('change', (e) => {
      e.preventDefault();
      editTask(e.target.value, task.index);
      taskDesc.blur();
    });

    deleteTask.classList.add('fas', 'fa-trash-can');

    deleteTask.addEventListener('click', (e) => {
      const myLocalStorage = getListFromLocalStorage();
      myLocalStorage.forEach((item, key) => {
        if (item.description === e.target.parentNode.children[1].value) {
          myLocalStorage.splice(key, 1);
        }
      });
      refreshItems(mylocal);
      addListToLocalStorage();
      e.target.parentElement.remove();
    });

    li.append(checkbox, taskDesc, deleteTask);
    taskWrapper.appendChild(li);
  });
};

const ClearcompletedTasks = () => {
  todoTask = todoTask.filter((item) => item.checked === false);
  refreshItems(todoTask);
  addListToLocalStorage();
  createTask();
};
clearAll.addEventListener('click', () => {
  ClearcompletedTasks();
});

const addToTasks = () => {
  const len = todoTask.length;
  todoTask.push({
    checked: false,
    description: newTask.value,
    index: len + 1,
  });
  newTask.value = '';
  addListToLocalStorage();
  createTask();
};

// prevent empty submition
newTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('task-description').value;
  if (input.length === 0) {
    return false;
  }
  return addToTasks();
});

document.addEventListener('DOMContentLoaded', () => {
  getListFromLocalStorage();
  createTask();
});

reset.addEventListener('click', () => {
  clearallTask();
  addListToLocalStorage();
  createTask();
});
