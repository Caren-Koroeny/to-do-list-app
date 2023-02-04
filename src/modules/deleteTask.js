import { getListFromLocalStorage } from './localStorage.js';

const deletTodoTask = (deleteTask) => {
  deleteTask.addEventListener('click', (e) => {
    const myLocalStorage = getListFromLocalStorage();
    myLocalStorage.forEach((item, key) => {
      if (item.description === e.target.parentNode.children[1].value) {
        myLocalStorage.splice(key, 1);
      }
    });
    localStorage.setItem('myTodoTasks', JSON.stringify(myLocalStorage));
    e.target.parentElement.remove();
  });
};

export default deletTodoTask;