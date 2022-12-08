import moreIcon from '../img/more_icon.png';
import deleteIcon from '../img/delete_icon.png';

export default class Render {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  show = (array) => {
    let listItemsHTML = '';
    array.forEach((task, index) => {
      listItemsHTML += `
          <li id=list-item-${index} key=${index}><input class="checkbox" type="checkbox"> <input id=description-${index} data-index=${index} class="task-description" value="${task.description}" disabled> <img id=more-${index} class="more-icon" data-index=${index} src=${moreIcon} alt=""><img id=delete-${index} class="delete-icon" data-index=${index} src=${deleteIcon} alt=""></li>
          `;
    });
    this.parentElement.innerHTML = listItemsHTML;
  };
}
