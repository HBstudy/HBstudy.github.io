const toDoForm = document.querySelector(".todo-form"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);

  paintTodo(newTodoObj);
  saveToDos();
}

function paintTodo(newTodo) {
  if (toDos.length > 10) {
    alert("You just add 10 TO-DO lists.");
    return false;
  }
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const delBtn = document.createElement("button");
  delBtn.innerText = "삭제";
  delBtn.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
