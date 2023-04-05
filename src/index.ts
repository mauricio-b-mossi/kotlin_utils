// Kotlin style list creation.
export function List<T>(items : number, init : (index : number) => T) : T[] {
    const arr = []
    for(let i = 0; i < items; i++){
        arr[i] = init(i)
    }
    return arr
}

// Kotlin style repeat function.
export function repeat(times : number, action : () => void) : void{
    for(let i = 0; i < times; i++){
        action()
    }
}

