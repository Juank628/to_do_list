/*
 * @jest-environment jsdom
 */
import Collection from '../src/modules/Collection.js';
import Render from '../src/modules/Render.js';

describe('add and remove', () => {
  test('add item', () => {
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

    expect(collection.addItem('third')).toStrictEqual([
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
      {
        description: 'third',
        completed: false,
        index: 3,
      },
    ]);
  });

  test('render after add item', () => {
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

    collection.addItem('third');
    render.show(collection.getItems());
    const listItems = document.querySelectorAll('.task-description');
    expect(listItems).toHaveLength(3);
  });
});
