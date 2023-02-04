export const addListToLocalStorage = (newTask) => {
  const todItems = JSON.parse(localStorage.getItem('myTodoTasks')) || [];
  const data = {
    checked: false,
    description: newTask.value,
    index: todItems.length + 1,
  };
  todItems.push(data);
  return localStorage.setItem('myTodoTasks', JSON.stringify(todItems));
};

export const getListFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('myTodoTasks')) {
      const todoTask = localStorage.getItem('myTodoTasks') || [];
      return JSON.parse(todoTask);
    }
    return [];
  }
  return [];
};
