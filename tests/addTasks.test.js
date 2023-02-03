import createMockDocument from "./mocks/documentMocks";
import { addToTasks } from "../src/modules/addTask";
import { display } from "../src/modules/display";

function addInputDescription(value, input){
    input.value = value;

}

descrie("add new item", () => {
    it('creates a container element inside the todo-activities', () => {
        createMockDocument('description-1');
        localStorage.clear()
        const todoActivites= document.querySelector('.todo-activities');

        addToTasks();

        expect(todoActivites.children[0].className).toEqual(
            (display)
        );

    })
})


