export const addListToLocalStorage = (newTask) => {
  let todItems = JSON.parse(localStorage.getItem("myTodoTasks")) || []
  console.log(todItems)
  const data = {
    checked: false,
    description: newTask.value,
    index: todItems.length + 1,
  }

  todItems.push(data)
  localStorage.setItem('myTodoTasks', JSON.stringify(todItems));
  };
  
export const getListFromLocalStorage = () => {

    if (localStorage.getItem('myTodoTasks')) {
      let todoTask = localStorage.getItem('myTodoTasks') || [];
      return JSON.parse(todoTask);
    }
    return [];
  };
