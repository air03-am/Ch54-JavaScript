
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
        const numerosEntero = Math.floor(escalarNumero); //con ceil obtendriamos 1...10 o multiplicando por 11 -> numeroAleatorio * 11
        console.log("Número aleatorio: ", numerosEntero); // 0...9
    }
};
generarNumerosAleatorios2(5);

//valor por defecto en una funcion minNum = 10
const generarNumerosAleatorios3 = (cantidad, minNum = 10, maxNum = 10) => {
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random();
        const escalarNumero = numeroAleatorio * ((maxNum - minNum) + 1); // +1 para incluir el 10
        const numerosEntero = Math.floor(escalarNumero + minNum); // minNum...maxNum
        console.log("Número aleatorio entre ${minNum} y ${maxNum}: ${numerosEnteros} ", numerosEntero); // 0...9
    }
};
generarNumerosAleatorios3(10, 70, 90); // Genera 5 números aleatorios entre 50 y 60 (sin incluir 60)

/*
    Melate Chocolate
    1. Al pulsar el botón generar mis numeros de la suerte
    2. Genera 6 números aleatorios entre 1 y 54 
    3. Mostrar el resultado en el DOM.
*/


/*
 Comentario de documentación (JSDoc) para una función JavaScript, no la función en sí. 
 Los símbolos @ son parte de la sintaxis de JSDoc para definir metadatos. (Siguiente comentario)
 */

/**
 * Generar un número aleatorio entre un rango de números
 * @param {number} minNum
 * @param {number} maxNum

*/ 
const generarNumeroAleatorio = (minNum, maxNum) => {
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * (maxNum - minNum + 1); 
    const numeroEntero = Math.floor(escalarNumero + minNum); 
    return numeroEntero;
} //Esta fúnción genera un solo número aleatorio entre un rango de números

const elNumeroExisteEnArreglo = (arreglo, numero) => {
    return arreglo.includes(numero); // Usa el método includes para verificar si el número existe en el arreglo
} // Esta función verifica si un número existe en un arreglo

// Función imprimir en el DOM
const imprimirMelateChocolate = (numeros) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = ` ${numeros.join(' - ')}`; // Une los números con un guion
}

// Función generar números de la suerte

const generarNumerosSuerte = (size = 6, minNum = 1, maxNum = 54 ) => {
    const numeros = []; // Arreglo para almacenar los números de la suerte
    let iteracion = 0; // Contador de iteraciones

    while (numeros.length < size) { // Genera 6 números
        const numeroAleatorio = generarNumeroAleatorio(minNum, maxNum); // Genera un número aleatorio entre 1 y 54
        if (elNumeroExisteEnArreglo(numeros, numeroAleatorio) === false) { // Verifica si el número ya existe
            numeros.push(numeroAleatorio); // Agrega el número al arreglo si no existe
        }
        console.log(iteracion, numeros, numeroAleatorio); // Imprime el número generado
        iteracion++; // Incrementa el contador de iteraciones
    }
    imprimirMelateChocolate(numeros); // Imprime los números en el DOM
}

// -------------- Uso del método sort() -------------------
const numerosIniciales = [5, 33, 8, 100, 4, 2, 7, 6];
                    //   [5, 33, 8, 100, 4, 2, 7, 6] iteración 0
                    //   [5, 8, 33, 100, 4, 2, 7, 6] iteración 1
                    //   [5, 8, 33, 100, 4, 2, 7, 6] iteración 2
                    //   [5, 8, 33, 4, 100, 2, 7, 6] iteración 3
                    //   [5, 8, 33, 4, 2, 100, 7, 6] iteración 4
                    //   [5, 8, 33, 4, 2, 7, 100, 6] iteración 5
                    //   [5, 8, 33, 4, 2, 7, 6, 100] iteración 6
                    // y vuelve a empezar otra vez comparando a = 5 y b = 8 

const comparaNumerosOrdenAscendente = (a, b) => {
    if (a < b) return -1; // no lo mueve
    if (a > b) return 1; // lo mueve de posición
    return 0; // no lo mueve
}

                                // 5 - 33 = -28 no se mueve 
                                // 33 - 8 = 25 se mueve
const comparaNumerosOrdenAscendente2 = (a, b) => a - b; // si es negativo y 0 no se mueve, si es positivo se mueve 


const comparaNumerosOrdenDescendente = (a, b) => {
    if (a < b) return 1; // lo mueve de posición
    if (a > b) return -1; // no lo mueve de posición
    return 0; // no lo mueve
}
                                // 33 - 5 = 28 se mueve 
                                //  8 - 5 = 3 se mueve
const comparaNumerosOrdenDescendente2 = (a, b) => b - a; // si es negativo y 0 no se mueve, si es positivo se mueve 




const ordenarNumeros = ( numerosDesordenados, fncCallBack) => {
    const numerosOrdenados = numerosDesordenados.slice();
    numerosOrdenados.sort(fncCallBack);
    return numerosOrdenados;
}

console.log( numerosIniciales);
console.log( ordenarNumeros(numerosIniciales, comparaNumerosOrdenAscendente));
console.log( ordenarNumeros(numerosIniciales, comparaNumerosOrdenDescendente));
console.log( ordenarNumeros(numerosIniciales, comparaNumerosOrdenAscendente2));
console.log( ordenarNumeros(numerosIniciales, comparaNumerosOrdenDescendente2));
console.log( ordenarNumeros(numerosIniciales, (a, b) => b - a)); // muy común de utilizar este tipo de callback
console.log( numerosIniciales); // pase por referencia se perdió el arreglo original la ser un objeto, debemos
//  evitar que modifique nuestro arreglo original, para eso utilizamos el método slice, este crea una copia 
// del arreglo original


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