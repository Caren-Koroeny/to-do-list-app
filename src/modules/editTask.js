import { addListToLocalStorage, getListFromLocalStorage } from "./localStorage";

const todoTask = getListFromLocalStorage()

export const editTask = (taskdescription, index) => {
    for (let j = 0; j < todoTask.length; j += 1) {
        console.log(index, taskdescription, todoTask[index - 1].description)
      if (todoTask[j].index === index) {
        todoTask[j] += '*';
      }
      todoTask[index - 1].description = taskdescription;
      localStorage.setItem('myTodoTasks', JSON.stringify(todoTask))
    }
  };
