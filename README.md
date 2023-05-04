# Welcome to Kotlin Utils!

The inspiration of this package came from interacting with languages such as Python and Kotlin.
Both languages had useful functions to create / initialize lists. However, Python's implementation
requires syntax not compatible with JavaScript, list comprehensions. Therefore, I chose to implementation
some Kotlin functions in JavaScript.

### Functions

List represents a list initializer, it accepts a size and an initializer function.

```typescript
List<T>(size : number, init : (e : number) => T) : T[]
```

Repeat repeats an action n times.

```typescript
repeat(times : number, action : () => void) : void
```

### Example use

```typescript
import { List, repeat } from 'kotlin_utils';

const evenNums = List(5, (e) => e * 2 + 2);
// => [2, 4, 6, 8, 10]

let i = 0;
repeat(5, () => (i = i + 1));
// => i == 5
```

Suggestion for more Kotlin functions are accepted.
