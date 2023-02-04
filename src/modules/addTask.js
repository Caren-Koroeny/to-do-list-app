import { addListToLocalStorage } from './localStorage.js';
import display from './display.js';

const addToTasks = (newTask) => {
  addListToLocalStorage(newTask);
  newTask.value = '';
  display();
};
export default addToTasks;