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
  console.log(e.target.matches('.more-icon'));
});

window.addEventListener('load', render.show(tasks.getItems()));
