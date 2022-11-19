/**
 * Clase 4 - Ejercitario en grupos.
 * Room 2
 */

// Ejercicio 1
function hola(nombre) {
    return 'Hola ' + nombre + '!';
}

// Ejercicio 2
function bmi(peso, altura) {
    return peso / (altura**2);
}

// Ejercicio 3
function suma(numero) {
    let suma = 0
    for (let index = 1; index <= numero; index++) {
        suma += index;
    }
    return suma;
}

// Ejercicio 4
function calcularColor(numero) {
    let color;
    if (numero === 1) {
        color = 'negro';
    } else if (numero === 2) {
        color = 'blanco';
    } else if (numero === 3) {
        color = 'azul';
    } else {
        color = 'verde';
    }
    return 'El color es ' + color;
}

// Ejercicio 5 (bonus)
function encriptar(mensaje) {
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encript = '';
    mensaje = mensaje.split(' ').join('').toUpperCase();
    for (const i in mensaje) {
        let caracter = mensaje.charAt(i);
        encript += alfabeto[caracter === 'A' ? alfabeto.indexOf('Z') : alfabeto.indexOf(caracter) - 1]

    }
    return encript;
}

// main
//console.log(hola('Pedro'))
//console.log(hola('Juan'))
//console.log(hola(''))

//console.log(bmi(65, 1.8))
//console.log(bmi(72, 1.6))
//console.log(bmi(52, 1.75))

//console.log(suma(4))
//console.log(suma(10))
//console.log(suma(15))

//console.log(calcularColor(1))
//console.log(calcularColor(2))
//console.log(calcularColor(3))
//console.log(calcularColor(8))

//console.log(encriptar("Hola Mundo"))
//console.log(encriptar("Preparacion programa"))