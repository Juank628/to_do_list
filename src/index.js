import Collection from './modules/Collection.js';
import Render from './modules/Render.js';
import './index.css';

const listSection = document.getElementById('listSection');
const taskForm = document.getElementById('task_form');
const taskInput = document.getElementById('task_input');

const tasks = new Collection('tasks', JSON.parse(localStorage.getItem('tasks')) || []);
const render = new Render(listSection);

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  tasks.addItem(taskInput.value);
  render.show(tasks.getItems());
});

listSection.addEventListener('click', (e) => {
  if (e.target.matches('.more-icon')) {
    const input = document.getElementById(`description-${e.target.dataset.index}`);
    const listItem = document.getElementById(`list-item-${e.target.dataset.index}`);
    const moreIcon = document.getElementById(`more-${e.target.dataset.index}`);
    const deleteIcon = document.getElementById(`delete-${e.target.dataset.index}`);
    input.disabled = false;
    input.style = 'background-color: yellow; border: 0';
    listItem.style = 'background-color: yellow';
    moreIcon.style = 'display: none';
    deleteIcon.style = 'display: block';
  }
});

listSection.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tasks.updateItem(e.target.dataset.index, e.target.value);
    render.show(tasks.getItems());
  }
});

window.addEventListener('load', render.show(tasks.getItems()));
