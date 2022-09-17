import { tasks, categories, icons } from "./todos.js";

export let statisticsTable = document.getElementById("stats-table");

export function createTotal() {
  let Ideas, Tasks, Thoughts, IdeasActive, TasksActive, ThoughtsActive;
  Ideas = Tasks = Thoughts = IdeasActive = TasksActive = ThoughtsActive = 0;

  tasks.forEach((task) => {
    if (task.category === "Idea") {
      Ideas++;
      if (!task.archived) IdeasActive++;
    }

    if (task.category === "Task") {
      Tasks++;
      if (!task.archived) TasksActive++;
    }
    if (task.category === "Random Thought") {
      Thoughts++;
      if (!task.archived) ThoughtsActive++;
    }
  });

  statisticsTable.innerHTML += Ideas
    ? createTotalTr("Idea", IdeasActive, Ideas)
    : ``;

  statisticsTable.innerHTML += Tasks
    ? createTotalTr("Task", TasksActive, Tasks)
    : ``;
  statisticsTable.innerHTML += Thoughts
    ? createTotalTr("Random Thought", ThoughtsActive, Thoughts)
    : ``;
}

export function createTotalTr(category, active, total) {
  return `
        <tr>
        
            <td className="category-icon stats-icon">${
              categories[category]
            }</td>
            </div>
            <td className="category2">${category}</td>
            <td className="active">${active}</td>
            <td className="archived">${total - active}</td>
        </tr>
    `;
}
