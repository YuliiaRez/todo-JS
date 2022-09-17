import * as ICONS from "./icons.js";
export let icons = ICONS;

export let categories = {
  Idea: icons.ideaIcon,
  Task: icons.taskIcon,
  "Random Thought": icons.thoughtIcon,
};

export let tasks = [
  {
    id: "task1",
    name: "Shopping list",
    created: new Date(2021, 3, 20),
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
    archived: false,
  },
  {
    id: "task2",
    name: "The theory of evolution",
    created: new Date(2021, 3, 7),
    category: "Random Thought",
    content: "The evolution is ..........",
    dates: "",
    archived: false,
  },
  {
    id: "task3",
    name: "New Feature",
    created: new Date(2021, 3, 27),
    category: "Idea",
    content: "Implement some feature in this ap",
    dates: "",
    archived: false,
  },
  {
    id: "task4",
    name: "Dentist",
    created: new Date(2021, 4, 5),
    category: "Task",
    content:
      "Im gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    dates: "3/5/2021, 5/5/2021",
    archived: false,
  },
  {
    id: "task5",
    name: "William Gaddis",
    created: new Date(2021, 4, 7),
    category: "Task",
    content: "Power doesn't come with bla bla bla",
    dates: "",
    archived: false,
  },
  {
    id: "task6",
    name: "Book",
    created: new Date(2021, 4, 15),
    category: "Task",
    content: "The Lean Statrup",
    dates: "",
    archived: true,
  },
  {
    id: "task7",
    name: "Book",
    created: new Date(2021, 4, 20),
    category: "Task",
    content: "The Lean Statrup",
    dates: "",
    archived: true,
  },
];
