export default class Collection {
  constructor(localStorageItem, items) {
    this.localStorageItem = localStorageItem;
    this.items = items || [];
  }

  addItem = (description) => {
    const completed = false;
    let index = 0;
    if (this.items.lenght >= 1) index = this.items.pop().index + 1;
    this.items.push({
      description,
      completed,
      index,
    });
    this.items.sort((a, b) => a.index - b.index);
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  };

  removeItem = (index) => {
    this.items.splice(index, 1);
    this.items.sort((a, b) => a.index - b.index);
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  }

  getItems = () => this.items.sort((a, b) => a.index - b.index);
}
