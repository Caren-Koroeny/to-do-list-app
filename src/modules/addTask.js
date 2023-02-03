import { addListToLocalStorage } from "./localStorage";
import { display } from "./display.js";   

export const addToTasks = (newTask) => {
    addListToLocalStorage(newTask);
    newTask.value = '';
    display()
  };
