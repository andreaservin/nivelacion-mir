/**
 * Clase 5 - Ejercicios con arreglos en javascript.
 * Room 3
 */

// Ejercicio 1
function sum (arr) {
    let suma = 0
    for(let i in arr){
        suma += arr[i]
    }
    return suma
}

// Ejercicio 2
function max (arr) {
    if (!arr.length) {
        return undefined
    }
    let max = 0
    for(let i in arr) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

// Ejercicio 3
// otra forma con arr.findIndex(value)
function maxIndex (arr) {
    if (!arr.length) {
        return -1
    }
    let maxIndex = 0
    let max = 0
    for(let i in arr) {
        if(arr[i] > max){
            max = arr[i]
            maxIndex = i
        }
    }
    return maxIndex
}

function maxIndexv2 (arr) {
    if (!arr.length) {
        return -1
    }
    let max1 = 0
    max1 = max(arr)

    return arr.indexOf(max1)
}

// Ejercicio 4
function join (arr) {
    if(!arr.length){
        return ""
    }
    let elementos = ""
    for(let i in arr){
        elementos += arr[i].concat(" ")
    }
    return elementos
}

// Ejercicio 5 bonus
/**
 matrix(3)
     [[1, 2, 3],
     [8, 9, 4],
     [7, 6, 5]]
*/
function matrix (n) {
    let matrix = []
    let elemento = 1
    for(let i=0; i < n**2; i++){
        for(let j=0; j < n; j++){
            matrix[i][j] = elemento
            ++elemento
        }
    }
    return matrix
}


// tests
//console.log(sum([1,2,3]))

//console.log(max([1,3,2]))
//console.log(max([10,9,8,7,6,5,4]))
//console.log(max([]))

//console.log(maxIndexv2([1,3,2])) // 1
//console.log(maxIndex([10,9,8,7,6,5,4])) // 0
//console.log(maxIndex([])) // -1

//console.log(join(["Hola", "Mundo"]))


