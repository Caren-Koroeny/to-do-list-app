import { display } from "./display";

export const ClearcompletedTasks = (todoTask) => {
    todoTask = todoTask.filter((item) => item.checked === false);
    localStorage.setItem('myTodoTasks', JSON.stringify(todoTask))
    display()
  };