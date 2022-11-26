/**
 * Clase 6 - Ejercicios en javascript.
 */

// Paso 4
const receta = {}
// Paso 5
receta.nombre = 'Sandwich'
// Paso 6
receta.ingredientes = []
// Paso 7
receta.ingredientes.push({ nombre: 'Pan', cantidad: 2})
// Paso 8
receta.ingredientes.push({ nombre: 'Queso', cantidad: 1})
// Paso 9
console.log(receta.ingredientes[0].nombre)
//Paso 10
console.log(receta.ingredientes.reduce((acumulador, { cantidad }) => (
    acumulador + cantidad
    ), 0)
)

// Ejercicios Bonus 1
function maxCaracter (texto) {
    let maxC = 0
    let letraRepetida = ''
    let repetidos = [...texto].reduce((objeto, letra) => {
        objeto[letra] = objeto[letra] ? objeto[letra] + 1 : 1;
        return objeto
    }, {})
    for(let key in repetidos) {
        if (repetidos[key] > maxC) {
            maxC = repetidos[key]
            letraRepetida = key
        }
    }
    return letraRepetida
}

console.log(maxCaracter("abcccccd")) // "c"
console.log(maxCaracter("manzana 12311111")) // "1"

// Ejercicios Bonus 2
function palindrome (texto) {
    const textoAux = texto.toLowerCase()
    const reverse = [...textoAux].reverse().toString().replaceAll(',', '')
    return reverse === textoAux ? true : false
}

console.log(palindrome("Amor a Roma")) // Output: true

console.log(palindrome("vamos makers!")) // Output: false