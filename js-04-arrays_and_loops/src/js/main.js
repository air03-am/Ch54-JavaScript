
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en consola cada uno de los cantantes, usandor for of
const imprimirCantantes = ( listaCantantes ) => {
    for (const cantante of listaCantantes) {
        console.log(cantante);
    }
}
imprimirCantantes(cantantes);

// Imprimir en consola cada uno de los cantantes, usandor for of
// Usar arrow function
// La salida debe ser como "Juan Gabriel - Jose José - Rocío Dúrcal - Ana Gabriel -"

const imprimirCantantes2 = ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        // cantantesConcatenados = cantantesConcatenados + cantante + " - ";
        cantantesConcatenados +=  cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes2(cantantes));

function imprimirCantantes3(arrayCantantes) {
    console.log(arrayCantantes.join(", "));
}
imprimirCantantes3(cantantes);

/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes2 = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const listaCantantes2 = document.getElementById("cantantes-lista2");

const imprimirCantantes4 = (cantantes2 ) => {
    let cantantesConcatenados = "";
    for (const cantante of cantantes2) {
        cantantesConcatenados +=  `<li>${cantante}</li>`;
    }
    listaCantantes2.innerHTML = cantantesConcatenados;
    return cantantesConcatenados;
}
imprimirCantantes4(cantantes2);


/* 
const unorderListCantantes = arregloCantantes => { 
    let concatenacion =" ";
        for (const cantante of arregloCantantes) {
            concatenacion += "<li>" + cantante + "</li>";
}
return concatenacion;
}
const imprimirDocumento = (arregloFinal) => document.getElementById("cantantes-lista").innerHTML = unorderListCantantes(arregloFinal);
imprimirDocumento(cantantes);
 */


// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
// multiplicando:
// for (let i = 1; i <= 7; i++ ){
//     multiplicador:
//     for (let j = 1; j <= 10 ; j++){        
//         console.log(`${i} x ${j} = ${i * j}`);             
//         if( i >= 4 ) break; //imprime la tabla de multiplicar del 1 al 3 y de la 4 en adelante, imprimer solo el x 1 
//     }

// }

multiplicando: //label 
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando; //imprime la tabla de multiplicar del 1 al 3 y la del 4 x 1  al usar el label, termina el ciclo
    }

}

// Ejercicios mentales
let myIteration; // undefined
for (let myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5    
}
console.log("Final", myIteration); // 6

for (let myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0, 1, 2
    if (myIteration === 2) {
        break; // Sale del bucle
    } 
}
console.log("Final", myIteration); // 2

console.log(   NaN === NaN );  // false
// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/


/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/ 

// --------- Ejercicio ------------------

/* while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0 ... 1.0 (sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");
 */

// ============== Ciclo For loop vs While loop ======================
/* 
 for (let i = 0; i < 5; i++) {
    console.log("For loop: ", i); // 0, 1, 2, 3, 4
}
let i = 0;
while (i < 5) {
    console.log("While loop: ", i); // 0, 1, 2, 3, 4
    i++;
}
*/

// ----------- Ejercicio ------------------

/* 
 Uso de Math.random()
    - Genera 5 números aleatorio entre 0.0 y 10.0 (sin incluir 10.0)
    - Para obtener un número entero entre min y max, usar Math.floor() o Math.ceil()
*/
const generarNumerosAleatorios = (cantidad) => {

    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
    return numeroAleatorio;
};
generarNumerosAleatorios(5);

/* 
 Uso de Math.random()
    - Genera 5 números aleatorio entre 0 y 10 (sin incluir 10)
    - Para obtener un número entero entre min y max, usar Math.floor() o Math.ceil()
*/
const generarNumerosAleatorios2 = (cantidad) => {
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random();
        const escalarNumero = numeroAleatorio * 10;
        const numerosEntero = Math.floor(escalarNumero);
        console.log("Número aleatorio: ", numerosEntero); // 0...9
    }
    return numerosAleatorios;
};
generarNumerosAleatorios2(5);

// ============== Ciclo do...while ======================
//                (do while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    do {
        sentencias;
    } while ( condición );

*/
/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/
/* do {
    const numeroSuerte = Math.random(); // 0 ... 1.0 (sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}while(  confirm("¿Quieres tu número de la suerte")  );

console.log("Gracias por participar");
 */