import { List } from '../index';

interface Person {
  name: string;
  age: number;
}

test('List initialization test', () => {
  expect(List(5, (it) => 1 + it)).toStrictEqual([1, 2, 3, 4, 5]);
});

function PersonGenerator(age: number, name: string = 'Mauricio'): Person {
  return { name, age };
}

test('List object creation', () => {
  expect(List(2, PersonGenerator)).toStrictEqual([
    { name: 'Mauricio', age: 0 },
    { name: 'Mauricio', age: 1 },
  ]);
});
