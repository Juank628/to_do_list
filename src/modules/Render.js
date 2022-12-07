import moreIcon from '../img/more_icon.png';

export default class Render {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  show = (array) => {
    let listItemsHTML = '';
    array.forEach((task, index) => {
      listItemsHTML += `
          <li key=${index}><input class="checkbox" type="checkbox"> ${task.description} <img class="more-icon" src=${moreIcon} alt=""></li>
          `;
    });
    this.parentElement.innerHTML = listItemsHTML;
  };
}
