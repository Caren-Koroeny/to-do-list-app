import completed from "../src/modules/__mock__/updatingMocks";
import LocalStorage from "./mocks/localStorage";


describe('check for updating an items completed status.', () => {
    const taskArr = [
      {
        index: 1,
        description: 'Task 1',
        completed: false,
      },
      {
        index: 2,
        description: 'Task 2',
        completed: true,
      },
      {
        index: 3,
        description: 'Task 3',
        completed: false,
      },
    ];
  
    test('check if task2 mark as completed', () => {
      completed(taskArr, 1);
      expect(taskArr[1].completed).toBe(false);
    });
  

  });