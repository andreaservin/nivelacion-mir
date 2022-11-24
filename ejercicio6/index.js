/**
 * Clase 6 - Ejercicios con objetos en javascript.
 * Room 1
 */

// Paso 4
let pedro = {
    nombre:"Pedro Perez",
    edad:30, // Paso 5
    activo:true,
    hobbies:["programar", "squash", "piano"]
}

// Paso 6
pedro.estatura = 1.8

// Paso 7
delete pedro.activo

// Paso 8
for (let propiedad in pedro){
    //console.log(`${propiedad}:${pedro[propiedad]}`)
}

// Paso 9
pedro.saluda = function () {
    return `Hola, me llamo ${pedro.nombre}`
    
}

// Bonus 1
function productosBaratos (arrObj) {
    let arreglo = []
    const arr = arrObj.filter(items => (items.precio  >= 5 && items.precio <= 10))
    for(let propiedades of arr){
        arreglo.push(propiedades.nombre)
    }
    return arreglo
}

// Bonus 2
function frecuencias (texto) {
    let nuevo = texto.replaceAll(' ','')
    let result = [...nuevo].reduce((objeto, letra) => {
        objeto[letra] = objeto[letra] ? objeto[letra] + 1 : 1;
        return objeto
    }, {})
    return result
}

// tests
//console.log(pedro.edad) // Paso 5
//console.log(pedro) // Paso 6
//console.log(pedro) // Paso 7
//console.log(pedro.saluda()) // Paso 10

// Bonus 1
let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
]
console.log(productosBaratos(prods)) // ["Arroz", "Tomate"]
// Bonus 2
console.log(frecuencias("hola mundo"))
console.log(frecuencias("anita lava la tina"))