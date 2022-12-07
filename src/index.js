import './index.css';
import moreIcon from './img/more_icon.png';

let listItemsHTML = '';
const listSection = document.getElementById('listSection');
const listItems = [
  {
    description: 'item 1',
    completed: false,
    index: 1,
  },
  {
    description: 'item 2',
    completed: false,
    index: 2,
  },
  {
    description: 'item 3',
    completed: false,
    index: 3,
  },
];

const renderList = () => {
  listItems.forEach((item) => {
    listItemsHTML += `
          <li><input class="checkbox" type="checkbox"> ${item.description} <img src=${moreIcon} alt=""></li>
          `;
  });
  listSection.innerHTML = listItemsHTML;
};

window.addEventListener('load', renderList);
