import display from './display.js';

const ClearcompletedTasks = (todoTask) => {
   todoTask.filter((item) => item.checked === false);
  localStorage.setItem('myTodoTasks', JSON.stringify(todoTask));
  display();
};
export default ClearcompletedTasks;