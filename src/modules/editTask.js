import { getListFromLocalStorage } from './localStorage.js';

const todoTask = getListFromLocalStorage();

const editTask = (taskdescription, index) => {
  for (let j = 0; j < todoTask.length; j += 1) {
    if (todoTask[j].index === index) {
      todoTask[j].description += '*';
    }
    todoTask[index - 1].description = taskdescription;
    localStorage.setItem('myTodoTasks', JSON.stringify(todoTask));
  }
};
export default editTask;