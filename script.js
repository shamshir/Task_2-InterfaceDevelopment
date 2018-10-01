/*
Pending:
- Make Todo's editable
- Label and clean code
*/

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
  input.setAttribute("onchange", "updateUncheckedCount()");
  var label = document.createElement("label");
  var delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.classList.add("button");
  delButton.setAttribute("onclick", "deleteTodo(this)");
  newTodo.appendChild(input);
  newTodo.appendChild(label);
  newTodo.appendChild(delButton);
  list.appendChild(newTodo);

  updateItemCount();
  updateUncheckedCount();
}

function deleteTodo(b) {
  b.parentNode.parentNode.removeChild(b.parentNode);
  updateItemCount();
  updateUncheckedCount();
}

function deleteCheckedTodos() {
  var todoList = list.getElementsByTagName("input");
  for (i = (todoList.length - 1); i >= 0; i--) {
    if (todoList[i].checked) {
      deleteTodo(todoList[i]);
    }
  }
}

function updateItemCount() {
  itemCountSpan.innerHTML = list.getElementsByTagName("li").length;
}

function updateUncheckedCount() {
  var counter = 0;
  var todoList = list.getElementsByTagName("input");
  for (i = 0; i < todoList.length; i++) {
    if (!todoList[i].checked) {
      counter += 1;
    }
  }
  uncheckedCountSpan.innerHTML = counter;
}