let inputToDo; // place where user inupting task to do
let addBtn; // button for adding task to list

let popupInput;
let confirmBtn;
let cancelBtn;
let tools;
let error;
let ulList; // list with tasks
let newTask;

//html dom all elements
const DOMElements = () => {
  inputToDo = document.querySelector(".todo-input");
  addBtn = document.querySelector(".btn-add");
  tools = document.querySelector(".tools");
  popupInput = document.querySelector(".popup-input");
  confirmBtn = document.querySelector(".accept");
  cancelBtn = document.querySelector(".cancel");
  error = document.querySelector(".error-info");
  ulList = document.querySelector(".todoList ul");
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

//Events
const DOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
};

// content loaded

document.addEventListener("DOMContentLoaded", main);
