export default class Collection {
  constructor(localStorageItem, items) {
    this.localStorageItem = localStorageItem;
    this.items = items || [];
  }

  addItem = (description) => {
    const completed = false;
    const index = this.items.length;
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
  };

  updateItem = (index, value) => {
    const newItems = this.items.map((item) => {
      if (item.index === parseInt(index, 10)) return { ...item, description: value };
      return item;
    });
    this.items = newItems;
    localStorage.setItem(this.localStorageItem, JSON.stringify(this.items));
  };

  getItems = () => this.items.sort((a, b) => a.index - b.index);
}
