import { icons } from "./todos.js";

export function iconsLoader() {
  Array.from(document.getElementsByClassName("header-icon")).forEach((col) => {
    if (col.classList.contains("archive")) col.innerHTML = icons.isArchivedIcon;
    if (col.classList.contains("delete")) col.innerHTML = icons.isDeletedIcon;
  });
}
