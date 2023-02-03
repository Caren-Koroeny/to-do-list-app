export const refreshItems = (todoTask) => {
    for (let i = 0; i < todoTask.length; i += 1) {
      const indexes = i + 1;
      todoTask[i].index = indexes;
    }
};