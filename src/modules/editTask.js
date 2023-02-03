import { addListToLocalStorage } from "./localStorage";

export const editTask = (taskdescription, index, todoTask) => {
    for (let j = 0; j < todoTask.length; j += 1) {
        console.log(todoTask[j].description, taskdescription, index)
      if (todoTask[j].index === index) {
        todoTask[j] += '*';
      }
      todoTask[index - 1].description = taskdescription;
      addListToLocalStorage(todoTask);
    }
  };