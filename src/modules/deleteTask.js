import { getListFromLocalStorage} from "./localStorage";

export const deletTodoTask = (deleteTask) => {
    deleteTask.addEventListener('click', (e) => {
        const myLocalStorage = getListFromLocalStorage();
        myLocalStorage.forEach((item, key) => {
            if (item.description === e.target.parentNode.children[1].value) {
            myLocalStorage.splice(key, 1);
            console.log(e.target.parentNode.children[1].value, item.description)
            }
        });
        localStorage.setItem("myTodoTasks", JSON.stringify(myLocalStorage))
        e.target.parentElement.remove();
        });

}
