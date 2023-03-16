import itemsCounter from '../__mocks__/itemsCounterMock.js';

const normalResponse = [{ id: 1, name: 'Rick' }, { id: 2, name: 'Morty' }];
const normalResponse2 = [{ id: 1, name: 'Rick' }, { id: 2, name: 'Morty' }, { id: 3, name: 'Summer' }, { id: 4, name: 'Beth' }, { id: 5, name: 'Jerry' }];
const emptyResponse = [];

describe('Items counter test', () => {
  test('It must count all the items displayed on the DOM', () => {
    expect(itemsCounter(normalResponse)).toBe(2);

    expect(itemsCounter(normalResponse2)).toBe(5);
  });

  test('If there\'s no items it should return 0', () => {
    expect(itemsCounter(emptyResponse)).toBe(0);
  });
});