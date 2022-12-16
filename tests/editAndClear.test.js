/*
 * @jest-environment jsdom
 */
import Collection from '../src/modules/Collection.js';
import Render from '../src/modules/Render.js';

describe('update and clear', () => {
  /*
  * test for edit description
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
      collection.updateItem(2, 'description', 'test description'),
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

  test('render after edit description', () => {
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
  * test for update completed status
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
      collection.updateItem(2, 'completed', true),
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
    // eslint-disable-next-line no-underscore-dangle
    const inlineStyle = updatedItem.style._values['text-decoration'];
    expect(inlineStyle).toBe('line-through');
  });

  /*
  * test for clear all completed tasks
  */
  test('clear completed', () => {
    const collection = new Collection('tasks', [
      {
        description: 'first',
        completed: true,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
      {
        description: 'third',
        completed: true,
        index: 3,
      },
    ]);

    expect(
      collection.removeAllCompleted(),
    ).toStrictEqual([
      {
        description: 'second',
        completed: false,
        index: 1,
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
        completed: true,
        index: 1,
      },
      {
        description: 'second',
        completed: false,
        index: 2,
      },
      {
        description: 'third',
        completed: true,
        index: 3,
      },
    ]);

    collection.removeAllCompleted();
    render.show(collection.getItems());
    const listItems = document.querySelectorAll('.task-description');
    expect(listItems).toHaveLength(1);
  });
});
