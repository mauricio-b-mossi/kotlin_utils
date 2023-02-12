// Kotlin style list creation
// Props should make a library with Kotlin functions
export function List<T>(items : number, init : (index : number) => T) : Array<T>{
    let arr = []
    for(let i = 0; i < items; i++){
        arr[i] = init(i)
    }
    return arr
}