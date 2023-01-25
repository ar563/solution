import { getItemsMaxNumber } from '../src';

test('should return the highest number in the string', () => {
  expect(
    getItemsMaxNumber([
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 11' },
      { name: 'item 3' },
      { name: 'item 10' },
    ])
  ).toEqual(11);
  expect(
    getItemsMaxNumber([
      { name: 'item1 item2' },
      { name: 'item11 item12' },
      { name: 'item3 item4' },
    ])
  ).toEqual(12);
});
