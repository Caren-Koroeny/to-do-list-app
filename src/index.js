import './style.css';

const listContainer = document.querySelector('#todo-list');

let todoTask = [];
const taskWrapper = document.querySelector(".todo-activities");
const newTask = document.getElementById("task-description");
const newTaskBtn = document.getElementById("addTask");
const clearAll = document.querySelector(".clear-completed-task");
const reset = document.getElementById("refresh")

const clearallTask = () => {
  todoTask = [];
};

const addListToLocalStorage = () => {
  localStorage.setItem("myTodoTasks", JSON.stringify(todoTask));

};
const getListFromLocalStorage = () => {
  if(localStorage.getItem("myTodoTasks")){
    todoTask = JSON.parse(localStorage.getItem("myTodoTasks"));

  }
  return todoTask;
};

const refreshItems = (todoTask) =>{
  for(let i = 0; i < todoTask.length; i += 1){
    const indexes = i + 1;
    todoTask[i].index = indexes;
  }
};

const removeTask = (index) => {
  const myLocalStorage = getListFromLocalStorage();
  myLocalStorage.splice(index - 1, 1);
};

const editTask = (taskdescription, index) => {
  todoTask[index - 1].description = taskdescription;
  addListToLocalStorage();
};

const createTask = () => {
  taskWrapper.innerHTML = "";
  const mylocal = getListFromLocalStorage();

  mylocal.forEach((task) => {
    const li = document.createElement("li");
    const checkbox =  document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    if(task.checked === true){
      checkbox.setAttribute('checked', 'checked');
    }
    checkbox.addEventListener('change', (e) =>{
      e.preventDefault();
      MediaStreamAudioDestinationNode.apply(todoTask, e.target, task.index);
      addListToLocalStorage();
    });

    const taskDesc = document.createElement("input");
    taskDesc.classList.add("todotask");
    taskDesc.value = task.description;

    const deleteTask = document.createElement('i');
    taskDesc.addEventListener('change', (e) => {
      e.preventDefault();
      editTask(e.target.value, task.index);
      taskDesc.blur();
    });
    deleteTask.classList.add("fas", "fa-ellipsis-v");
    deleteTask.addEventListener('click', () => {
      removeTask(task.index);
      refreshItems(mylocal);
      addListToLocalStorage();
      createTask();
    });

    li.append(checkbox,taskDesc,deleteTask);
    taskWrapper.appendChild(li);
  });
};

const ClearcompletedTasks = () => {
  todoTask = todoTask.filter((item) => item.checked === false);
  refreshIndex(todoTask);
  addListToLocalStorage();
  createTask();
};
clearAll.addEventListener('click', () => {
  ClearcompletedTasks();
});

const addToTasks = () => {
  const lengt = todoTask.length;
  todoTask.push({
    checked: false,
    description: newTask.value,
    index: lengt + 1,
  });
  newTask .value = '';
  addListToLocalStorage();
  createTask();
};
newTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToTasks();
});

document.addEventListener('DOMContentLoaded', () => {
  getListFromLocalStorage()
  createTask();
});

reset.addEventListener('click', () => {
  clearallTask()
  addListToLocalStorage()
  createTask();
});



// const loadTask = () => {
//   const sortedList = LIST.sort((item1, item2) => item1.index - item2.index);

//   for (let i = 0; i < sortedList.length; i += 1) {
//     listContainer.innerHTML += `
    
//     <div class="task-container">
//       <form class="task-form">
      
//         <input type="checkbox" class="checkbox" <p class="task-description">&nbsp&nbsp${sortedList[i].description} 
//         <i class="fas fa-ellipsis-v pointer edit-task" aria-hidden="true"></i>
//         </p>
        
//       </form>
//   </div>
  
//     `;
//   }
// };

// document.addEventListener('DOMContentLoaded', loadTask);