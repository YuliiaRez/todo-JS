import "./styles.css";
import { categories, icons } from "./todos.js";
import { formatDate } from "./functionsIdDates.js";
import { CreateTaskForm } from "./createTaskForm";
import { changeIsArchived, deleteNote, activeTasksTable } from "./app";

export function createTask(task) {
  let tr = document.createElement("tr");
  tr.id = task.id;
  tr.innerHTML = `
 <td className="category-icon">${categories[task.category]} </td>     
            <td className="name">${task.name}</td>
            <td className="created">${formatDate(task.created)}</td>
            <td className="category1">${task.category}</td>
            <td className="content">${task.content}</td>
            <td className="dates">${task.dates}</td>
    `;
  let tdEdit = document.createElement("td"),
    tdArchive = document.createElement("td"),
    tdDelete = document.createElement("td");

  tdEdit.className = "row-icon edit";
  tdEdit.addEventListener("click", () => {
    CreateTaskForm(task);
  });
  tdEdit.innerHTML = icons.editIcon;

  tdArchive.className = "row-icon archive";
  tdArchive.addEventListener("click", () => {
    changeIsArchived(task);
  });
  tdArchive.innerHTML = activeTasksTable
    ? icons.archiveIcon
    : icons.unArchiveIcon;

  tdDelete.className = "row-icon delete";
  tdDelete.addEventListener("click", () => {
    deleteNote(task.id);
  });
  tdDelete.innerHTML = icons.deleteIcon;

  tr.append(tdEdit, tdArchive, tdDelete);
  return tr;
}
