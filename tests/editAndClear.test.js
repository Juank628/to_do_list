/*
 * @jest-environment jsdom
 */
import Collection from '../src/modules/Collection.js';
import Render from '../src/modules/Render.js';

describe('update and clear', () => {
  /*
  * update description property
  */
  test('update description', () => {
    const collection = new Collection('tasks', [
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
    ]);

    expect(
      collection.updateItem(2, 'description', 'test description')
    ).toStrictEqual([
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'test description',
        completed: false,
        index: 2,
      },
    ]);
  });

  test('render after description update', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const list = document.getElementById('list');
    const render = new Render(list);
    const collection = new Collection('tasks', [
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
    ]);

    collection.updateItem(2, 'description', 'test description');
    render.show(collection.getItems());
    const updatedItemText = document.getElementById('description-2').value;
    expect(updatedItemText).toBe('test description');
  });

  /*
  * update completed property
  */
  test('update completed', () => {
    const collection = new Collection('tasks', [
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
    ]);

    expect(
      collection.updateItem(2, 'completed', true)
    ).toStrictEqual([
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'second',
        completed: true,
        index: 2,
      },
    ]);
  });

  test('render after completed update', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const list = document.getElementById('list');
    const render = new Render(list);
    const collection = new Collection('tasks', [
      {
        description: 'first',
        completed: false,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
    ]);

    collection.updateItem(2, 'completed', true);
    render.show(collection.getItems());
    const updatedItem = document.getElementById('description-2');
    const inlineStyle = updatedItem.style._values["text-decoration"]
    expect(inlineStyle).toBe("line-through");
  });

});
