let inputToDo; // place where user inupting task to do
let addBtn; // button for adding task to list

let tools;
let error;
let ulList; // list with tasks
let newTask;

let popup;
let popupInfo;
let popupInput;
let acceptBtn;
let cancelBtn;
let toDoToEdit;
let newTaskEdit;

//html dom all elements
const DOMElements = () => {
  inputToDo = document.querySelector(".todo-input");
  addBtn = document.querySelector(".btn-add");
  tools = document.querySelector(".tools");
  error = document.querySelector(".error-info");
  ulList = document.querySelector(".todoList ul");

  acceptBtn = document.querySelector(".accept");
  cancelBtn = document.querySelector(".cancel");
  popupInput = document.querySelector(".popup-input");
  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
};
//main - all functions
const main = () => {
  DOMElements();
  DOMEvents();
};

// adding new task to list
const addNewTask = () => {
  if (inputToDo.value !== "") {
    newTask = document.createElement("li");

    ulList.appendChild(newTask);
    newTask.textContent = inputToDo.value;
    createToolsArea();
    inputToDo.value = "";
    error.textContent = "";
  } else {
    error.textContent = "You cant put empty task!";
  }
};

const createToolsArea = () => {
  const toolPanel = document.createElement("div");
  toolPanel.classList.add("tools");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  newTask.append(toolPanel);
  toolPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editingTask(e);
  } else if (e.target.matches(".delete")) {
    deletingTask(e);
  }
};

const editingTask = (e) => {
  newTaskEdit = e.target.closest("li");
  popup.style.display = "flex";
  popupInput.value = newTaskEdit.firstChild.textContent;
};

const cancelEditing = () => {
  popup.style.display = "none";
};

const acceptingNewToDo = () => {
  if (popupInput.value !== "") {
    newTaskEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
  } else popupInfo.textContent = "You have to input your task!";
};

const deletingTask = (e) => {
  e.target.closest("li").remove("li");

  const allTasks = document.querySelectorAll("li");
  if (allTasks.length !== 0) {
    error.textContent = "";
  } else error.textContent = "There are no tasks.";
};

const enterKeyCheck = (e) => {
  if (e.key == "Enter") {
    addNewTask();
  }
};

//Events
const DOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  document.addEventListener("click", checkClick);
  cancelBtn.addEventListener("click", cancelEditing);
  acceptBtn.addEventListener("click", acceptingNewToDo);
  inputToDo.addEventListener("keyup", enterKeyCheck);
};

// content loaded

document.addEventListener("DOMContentLoaded", main);
