import "./styles.css";
import { tasks } from "./todos.js";
import { CreateTaskForm } from "./createTaskForm";
import { createTotal, statisticsTable } from "./createTotal";
import { iconsLoader } from "./iconsLoader";
import { createTask } from "./createTask";

let tasksTable = document.getElementById("archive-table");
export let activeTasksTable = true;

//Notes---------------------//
export function createNote(task) {
  tasks.push(task);
  updateTables();
}
export function updateNote(task) {
  try {
    let index = tasks.findIndex((n) => n.id === task.id);
    tasks.splice(index, 1, task);
    updateTables();
  } catch (e) {
    console.error(e);
  }
}
export function deleteNote(noteID) {
  try {
    let index = tasks.findIndex((n) => n.id === noteID);
    if (index < 0) throw "There is no such task!";
    tasks.splice(index, 1);
    document.getElementById(noteID).remove();
    clearInnerHTML(statisticsTable);
    createTotal();
  } catch (e) {
    console.error(e);
  }
}
export function changeIsArchived(task) {
  tasks[tasks.findIndex((n) => n.id === task.id)].archived =
    !tasks[tasks.findIndex((n) => n.id === task.id)].archived;
  updateTables();
}

//Table---------------------//
function updateTables() {
  clearAllTables();
  createTasksTable();
  createTotal();
}
function clearAllTables() {
  clearInnerHTML(tasksTable);
  clearInnerHTML(statisticsTable);
}
function clearInnerHTML(parent) {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
}

function createTasksTable() {
  tasks.forEach((task) => {
    if (!task.archived === activeTasksTable)
      tasksTable.append(createTask(task));
  });
}

function switchTables() {
  activeTasksTable = !activeTasksTable;
  clearInnerHTML(tasksTable);
  createTasksTable();
}

document
  .getElementById("table-switcher")
  .addEventListener("click", switchTables);
document
  .getElementById("create-task-button")
  .addEventListener("click", CreateTaskForm);

iconsLoader();
updateTables();
