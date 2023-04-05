/**
 * This function returns a list<T> of size n. Each item it created via an init function, which accepts the index as an argument.
 * @param {number} size The size of the list.
 * @param {(number) => T} init The init function for the list. Accepts the index of the list item as an argument.
 * @return {Array<T>} Returns the list<T>.
 */
export function List<T>(size: number, init: (index: number) => T): T[] {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = init(i);
  }
  return arr;
}

/**
 * This function perfoms an action n times.
 * @param {number} times Specifies the amount of times the action will be performed.
 * @param {() => void} action The action to be performed.
 * @return {void}
 *
 */
export function repeat(times: number, action: () => void): void {
  for (let i = 0; i < times; i++) {
    action();
  }
}
