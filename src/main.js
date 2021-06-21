import {createMenu} from "./view/menu.js";
import {createFilters} from "./view/filter.js";
import {createBoard} from "./view/board.js";
import {createTaskEditTemplate} from "./view/editTask.js";
import {createTask} from "./view/task.js";
import {createLoadBtn} from "./view/loadButton.js";
import {generateFilter} from "./mock/generateFilter.js";
import {generateTask} from "./mock/generateTask.js";


const TASK_COUNT = 22;
const TASK_COUNT_ON_START = 8;
const TASK_COUNT_SHOWING_ON_BTN = 8;
const TASKS = new Array(TASK_COUNT).fill().map(generateTask);

const mainHeader = document.querySelector(`.main__control`);
const main = document.querySelector(`main`);
const renderElement = (container, element, place) => {
  container.insertAdjacentHTML(place, element);
};

renderElement(mainHeader, createMenu(), `beforeend`);
renderElement(main, createFilters(generateFilter()), `beforeend`);
renderElement(main, createBoard(), `beforeend`);

const board = document.querySelector(`.board`);
const boardTasks = document.querySelector(`.board__tasks`);
let showingTaskCount = TASK_COUNT_ON_START;
renderElement(boardTasks, createTaskEditTemplate(TASKS[0]), `beforeend`);
for (let i = 1; i < TASK_COUNT_ON_START; i++) {
  renderElement(boardTasks, createTask(TASKS[i]), `beforeend`);
}
renderElement(board, createLoadBtn(), `beforeend`);
const loadBtn = document.querySelector(`.load-more`);
loadBtn.addEventListener(`click`, onLoadBtnClick);

function onLoadBtnClick(evt) {
  evt.preventDefault();
  const prevTaskCount = showingTaskCount;
  showingTaskCount = showingTaskCount + TASK_COUNT_SHOWING_ON_BTN;
  TASKS.slice(prevTaskCount, showingTaskCount).forEach((task) => {
    renderElement(boardTasks, createTask(task), `beforeend`);
  });
  if (showingTaskCount > TASK_COUNT) {
    loadBtn.remove();
  }
}
