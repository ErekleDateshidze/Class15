const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filet-todo");
const todoList = document.querySelector(".todo-list");



//Event Listeners 

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);









function addTodo(event) {
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //Check Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoButton.Div.appendChild(completedButton);

    //Check trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild.add(trashButton);


    //Append to List
    todoButton.List.appendChild(todoDiv);
}


function deleteCheck(event) {

}
