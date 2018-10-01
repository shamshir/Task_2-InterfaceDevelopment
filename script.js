/*
Pending:
- Update Counters
- Programm Delete-all-checked function
- Make Todo's editable
*/

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

window.onload = function () {

}

function newTodo() {
  var newTodo = document.createElement("li");
  newTodo.classList.add("todo-container");
  var input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("todo-checkbox");
  input.setAttribute("onchange", "updateUncheckedCounter()");
  var label = document.createElement("label");
  var delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.classList.add("button");
  delButton.setAttribute("onclick", "deleteTodo(this)");
  newTodo.appendChild(input);
  newTodo.appendChild(label);
  newTodo.appendChild(delButton);
  list.appendChild(newTodo);
}

function deleteTodo(b) {
  b.parentNode.parentNode.removeChild(b.parentNode);
}

function deleteTodos() {

}

function updateUncheckedCounter() {

}