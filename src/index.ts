// Kotlin style list creation
// Props should make a library with Kotlin functions
export function List<T>(items : number, init : (index : number) => T) : T[] {
    const arr = []
    for(let i = 0; i < items; i++){
        arr[i] = init(i)
    }
    return arr
}