import {createMenu} from "./view/menu.js";
import {createFilters} from "./view/filter.js";
import {createBoard} from "./view/board.js";
import {createTaskEditTemplate} from "./view/editTask.js";
import {createTask} from "./view/task.js";
import {createLoadBtn} from "./view/loadButton.js";

const TASK_COUNT = 3;
const mainHeader = document.querySelector(`.main__control`);
const main = document.querySelector(`main`);
const renderElement = (container, element, place) => {
  container.insertAdjacentHTML(place, element);
};

renderElement(mainHeader, createMenu(), `beforeend`);
renderElement(main, createFilters(), `beforeend`);
renderElement(main, createBoard(), `beforeend`);

const board = document.querySelector(`.board`);
const boardTasks = document.querySelector(`.board__tasks`);

renderElement(boardTasks, createTaskEditTemplate(), `beforeend`);
for (let i = 0; i < TASK_COUNT; i++) {
  renderElement(boardTasks, createTask(), `beforeend`);
}
renderElement(board, createLoadBtn(), `beforeend`);
