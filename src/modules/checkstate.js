const setState = (todoTask, checkbox, index) => {
  const decre = index - 1;
  if (checkbox.checked) {
    todoTask[decre].checked = true;
  } else {
    todoTask[decre].checked = false;
  }
};

export default setState;