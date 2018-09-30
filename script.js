const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var newTodo = document.createElement("li");
  newTodo.classList.add("todo-container");
  var input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("todo-checkbox");
  var label = document.createElement("label");
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  button.classList.add("button");
  newTodo.appendChild(input);
  newTodo.appendChild(label);
  newTodo.appendChild(button);
  list.appendChild(newTodo);
}

function deleteTodos() {

}