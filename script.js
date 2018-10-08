/* -------------------------- Shortcuts -------------------------- */
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/* -------------------------- Events -------------------------- */
window.onload = function() {

  // New todo button event
  document.getElementById("newTodoButton").onclick = function() {
    newTodo();
  }

  // Delete all checked todo's button event
  document.getElementById("deleteCheckedButton").onclick = function() {
    deleteCheckedTodos();
  }

  // Events of edit & delete buttons of each todo
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("editButton")) {
      changeTodoName(e.target);
    }
    if (e.target.classList.contains("singleDeleteButton")) {
      deleteTodo(e.target);
    }
  })

}

/* -------------------------- Main Functions -------------------------- */

// Changes the name of a given todo with a prompt
function changeTodoName(b) {
  var newName = prompt("Enter the new name for this pending matter:", "");
  b.parentNode.childNodes[1].innerHTML = newName;
}

// Deletes a given todo
function deleteTodo(b) {
  b.parentNode.parentNode.removeChild(b.parentNode);
  updateItemCount();
  updateUncheckedCount();
}

// Deletes all todo's whose checkboxes are checked
function deleteCheckedTodos() {
  var todoList = list.getElementsByTagName("input");
  for (i = (todoList.length - 1); i >= 0; i--) {
    if (todoList[i].checked) {
      deleteTodo(todoList[i]);
    }
  }
}

// Creates a new todo with a checkbox, label, delete & edit buttons
function newTodo() {
  var newTodo = document.createElement("li");
  newTodo.classList.add("todo-container");
  newTodo.appendChild(createCheckbox());
  newTodo.appendChild(createLabel());
  newTodo.appendChild(createDelButton());
  newTodo.appendChild(createEditButton());
  list.appendChild(newTodo);
  updateItemCount();
  updateUncheckedCount();
}

/* -------------------------- Auxiliary Functions -------------------------- */

// Creates a checkbox element and sets its onchange property
function createCheckbox() {
  var inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("todo-checkbox");
  inputCheck.setAttribute("onchange", "updateUncheckedCount()");
  return inputCheck;
}

// Creates a delete button
function createDelButton() {
  var delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.classList.add("button", "singleDeleteButton");
  return delButton;
}

// Creates an edit button
function createEditButton() {
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("button", "editButton");
  return editButton;
}

// Creates a label to display the name of the task
function createLabel() {
  var label = document.createElement("label");
  var labelName = prompt("Enter your pending matter:", "");
  label.innerHTML = labelName;
  return label;
}

// Updates the total number of todo's
function updateItemCount() {
  itemCountSpan.innerHTML = list.getElementsByTagName("li").length;
}

// Updates the total number of unchecked todo's
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