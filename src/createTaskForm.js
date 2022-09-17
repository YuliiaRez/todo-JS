import { categories } from "./todos.js";
import { createID, getDates } from "./functionsIdDates.js";

import { createNote, updateNote } from "./app";

export function CreateTaskForm(task) {
  let form = document.createElement("form");

  form.innerHTML =
    `
        <input type="text" name="name" value="${
          typeof task.name === "string" ? task.name : ""
        }" placeholder="Name" required>
        <select name="categories">
        ` +
    Object.keys(categories).map(
      (c) =>
        `<option value="${c}" ${
          task.category === c ? "selected" : ""
        }>${c}</option>`
    ) +
    `
        </select>
        <textarea name="content" placeholder="Content">${
          task.content ? task.content : ""
        }</textarea>
        <input class="cancel" type="button" value="Cancel">
        <input id="submit-button" type="submit" value="Create Note" > 
    `;
  form.getElementsByClassName("cancel")[0].addEventListener("click", () => {
    document.getElementsByClassName("wrapper-div")[0].remove();
  });

  form.onsubmit = (event) => {
    event.preventDefault();
    let newNote = {
      id: typeof task.name === "string" ? task.id : createID(),
      name: event.target.name.value,
      created: typeof task.name === "string" ? task.created : new Date(),
      category: event.target.categories.value,
      content: event.target.content.value,
      dates: getDates(event.target.content.value),
      archived: typeof task.name === "string" ? task.archived : false,
    };

    if (typeof task.name === "string") updateNote(newNote);
    else createNote(newNote);

    document.getElementsByClassName("wrapper-div")[0].remove();
  };

  let wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper-div";
  wrapperDiv.append(form);

  document.body.prepend(wrapperDiv);
}
