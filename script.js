/*
Pending:
- Update Counters
- Programm Delete-all-checked function
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

  updateItemCount();
}

function deleteTodo(b) {
  b.parentNode.parentNode.removeChild(b.parentNode);
  updateItemCount();
}

function deleteCheckedTodos() {
  var todoList = list.getElementsByTagName("li");
  for (i = 0; i < todoList.length; i++) {
    if (todoList[i].checked) {
      list.getElementsByTagName("li")[i].parentNode.removeChild(todoList[i]);
    }
  }
}

function updateItemCount() {
  itemCountSpan.innerHTML = list.getElementsByTagName("li").length;
}

function updateUncheckedCount() {

}