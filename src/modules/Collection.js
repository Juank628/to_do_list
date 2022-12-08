export default class Collection {
  constructor(localStorageItem, items) {
    this.localStorageItem = localStorageItem;
    this.items = items || [];
  }

  addItem = (description) => {
    const completed = false;
    const index = this.items.length + 1;
    this.items.push({
      description,
      completed,
      index,
    });
    this.items.sort((a, b) => a.index - b.index);
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  };

  removeItem = (index) => {
    const arrayIndexToDelete = index - 1;
    this.items.splice(arrayIndexToDelete, 1);
    const newItems = this.items.map((item, index) => ({ ...item, index: index + 1 }));
    this.items = newItems;
    this.items.sort((a, b) => a.index - b.index);
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  };

  updateItem = (index, property, value) => {
    const newItems = this.items.map((item) => {
      if (item.index === parseInt(index, 10)) {
        item[property] = value;
      }
      return item;
    });
    this.items = newItems;
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  };

  getItems = () => this.items.sort((a, b) => a.index - b.index);
}
