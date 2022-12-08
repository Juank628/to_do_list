import Collection from './modules/Collection.js';
import Render from './modules/Render.js';
import './index.css';

const listSection = document.getElementById('listSection');
const taskForm = document.getElementById('task_form');
const taskInput = document.getElementById('task_input');
const clearButton = document.getElementById('clear_button');

const tasks = new Collection(
  'tasks',
  JSON.parse(localStorage.getItem('tasks')) || [],
);
const render = new Render(listSection);

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  tasks.addItem(taskInput.value);
  render.show(tasks.getItems());
});

listSection.addEventListener('click', (e) => {
  if (e.target.matches('.more-icon')) {
    const input = document.getElementById(
      `description-${e.target.dataset.index}`,
    );
    const listItem = document.getElementById(
      `list-item-${e.target.dataset.index}`,
    );
    const moreIcon = document.getElementById(`more-${e.target.dataset.index}`);
    const deleteIcon = document.getElementById(
      `delete-${e.target.dataset.index}`,
    );
    input.disabled = false;
    listItem.style = 'background-color: yellow';
    moreIcon.style = 'display: none';
    deleteIcon.style = 'display: block';
  }
  if (e.target.matches('.delete-icon')) {
    tasks.removeItem(e.target.dataset.index);
    render.show(tasks.getItems());
  }

  if (e.target.matches('.checkbox')) {
    let value = false;
    if (e.target.checked) value = true;
    tasks.updateItem(e.target.dataset.index, 'completed', value);
    render.show(tasks.getItems());
  }
});

listSection.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tasks.updateItem(e.target.dataset.index, 'description', e.target.value);
    render.show(tasks.getItems());
  }
});

clearButton.addEventListener('click', () => {
  tasks.removeAllCompleted();
  render.show(tasks.getItems());
});

window.addEventListener('load', render.show(tasks.getItems()));
