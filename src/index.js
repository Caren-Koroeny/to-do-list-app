import "./style.css";

const listContainer = document.querySelector("#todo-list");

const LIST = [
  {
    description: 'Read DSA',
    completed: false,
    index: 0,
  },
  {
    description: 'Finish my To do App',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn new JS FrameWorks',
    completed: false,
    index: 2,
  },

];
const loadTask = () =>{
  const sortedList = LIST.sort((item1, item2) => item1.index - item2.index);

  for (let i = 0; i < sortedList.length; i += 1) {
    listContainer.innerHTML += `
    <div class="task-container">
      <form class="task-form">
        <input type="checkbox" class="checkbox">
      </form>
    <p class="task-description">${sortedList[i].description}</p>
  </div>
  <hr>
    `;
  }
};

document.addEventListener('DOMContentLoaded', loadTask);
