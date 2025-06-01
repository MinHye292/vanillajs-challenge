const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  console.log("111");
  const li = document.createElement("li");
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoList.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
