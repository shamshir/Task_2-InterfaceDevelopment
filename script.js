/* ------------ Shortcuts ------------ */
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/* ------------ Functions ------------ */
function createCheckbox() {
  var inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("todo-checkbox");
  inputCheck.setAttribute("onchange", "updateUncheckedCount()");
  return inputCheck;
}

function createDelButton() {
  var delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.classList.add("button", "singleDeleteButton");
  delButton.setAttribute("onclick", "deleteTodo(this)");
  return delButton;
}

function createLabel() {
  var label = document.createElement("label");
  var labelName = prompt("Enter your pending matter:", "");
  label.contentEditable = "true";
  label.innerHTML = labelName;
  return label;
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

function newTodo() {
  var newTodo = document.createElement("li");
  newTodo.classList.add("todo-container");
  newTodo.appendChild(createCheckbox());
  newTodo.appendChild(createLabel());
  newTodo.appendChild(createDelButton());
  list.appendChild(newTodo);
  updateItemCount();
  updateUncheckedCount();
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