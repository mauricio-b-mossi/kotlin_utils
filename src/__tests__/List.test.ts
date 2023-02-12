import {List} from '../index'

test('List initialization test', () => {
    expect(List(5, (it => 1 + it))).toStrictEqual([1,2,3,4,5]);
});