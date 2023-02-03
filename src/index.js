import './style.css';
import { display } from './modules/display.js';
import { addToTasks } from './modules/addTask';
import { refreshItems } from './modules/refresh';
import { editTask } from './modules/editTask.js';
import { ClearcompletedTasks } from './modules/clearAll.js';
import { getListFromLocalStorage } from './modules/localStorage';

const newTaskBtn = document.getElementById('new-task');
const reset = document.getElementById('refresh');
const clearAll = document.querySelector('.clear-completed-task');

const data = getListFromLocalStorage()

document.addEventListener('DOMContentLoaded', () => {
  display()
});


clearAll.addEventListener('click', () => {
  
  ClearcompletedTasks(data);
});

/* Add a new button */
newTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('task-description');
  if (input.value.length === 0) {
    return false;
  }
  addToTasks(input);
  display()
});

reset.addEventListener('click', (e) => {
  refreshItems(data)
})