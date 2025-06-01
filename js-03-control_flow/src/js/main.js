/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/
/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o gual a 18, la funcion debe 
 retornar el mensaje "Eres mayor de edad"
 En caso contrario, retornar el mensaje "Eres menor de edad".
 -Realizar la version if-else sin usar el bloque de código {}
*/
const verificadorEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}

console.log(verificadorEdad(19));
/*
  Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o gual a 18 y menor o igual a 30
                        (Evaluar con 18 Y(&&) evaluar con 30)
 la función bebe retornar el mensaje "Tu luchador es Místico"
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo"
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const verificadorEdad2 = edad => {
    if (edad >= 18 && edad <= 30) return "Tu luchador es Místico";
    else if (edad >= 31) return "Tu luchador es el perro Aguayo";
    else return "Tu luchador es Penta";
}

console.log(verificadorEdad2(18));
console.log(verificadorEdad2(30));
console.log(verificadorEdad2(31));
console.log(verificadorEdad2(7));

// Bloque de código
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar); // 30, 40, 50
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar); // 100, 110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar); // 30, 40, 120
}

// Ejercicios mentales
// -------------- Ejercicio 1 ---------------------------
let active = false
// entra al if y termina la condición con el";", despues entra a un bloque de código e 
// imprime "Esta activo" y al final imprime Fin del programa 

if(active == true); {
    console.log("Esta activo")
}
console.log("Fin del programa");

// -------------- Ejercicio 2 ---------------------------
active = false;
if(active) //En valores booleanos se recomienda poner asi, en otras tenemos que poner ===
    console.log("Esta activo");
    console.log("Tiene autorización");

console.log("Fin del programa");
// Se imprimiria los ultimos dos console.log debido a que el if es false y nunca entrará 

// -------------- Ejercicio 3 ---------------------------
active = false;
if(active); console.log("Está activo");
// else console.log("No está activo"); //Erro de sintaxis la estructura del else siempre es con el if
console.log("Fin del programa");

// Se imprimiriá "Está activo", lo demás no se imprimiriá ya que el punto 
// y coma del if corta la sentencia y por ende así sea falso o verdadero no entrará nunca al else,
// Esto debido a que lo toma como error, ya que el else siempre trabaja en conjunto con un if y por
// ende no puede continuar con el código y no se imprimirá el tercer console.log




//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
const evaluarNombre = (nombre) => {
    switch(nombre){
        case "Lua":
            resultado = ("Es de Abril");
            break;
        case "Borrego":
        case "Besito":
        case "Frijol":
        case "Paco":
            resultado = "Es de Yessica";
            break;            
        case "Milo":
            resultado = ("Es de Carlos");
            break;
        case "Cuchara":
            resultado = ("Es de Carlos");
            break;
        default:
            resultado = ("No se sabe de quien es");
    }
    return resultado;
}

console.log(evaluarNombre("Lua")); // Es de Abril
console.log(evaluarNombre("Milo")); // No se sabe de quien es
console.log(evaluarNombre("Borrego")); // Ya sea que sea Borrego, Besito, Frijol y Paco nos dara el mismo resultado

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 * 
 * Realizar dos versiones, una versión switch y otra con if-else
 */

const velocidadVentilador = (velocidad) => {
    switch(velocidad){
        case 0:
            resultado = (`Velocidad ${velocidad} : Apagado`);
            break;
        case 1:
            resultado = (`Velocidad ${velocidad} : Baja`);
            break;
        case 2:
            resultado = (`Velocidad ${velocidad} : Media`);
            break;
        case 3:
            resultado = (`Velocidad ${velocidad} : Alta`);
            break; 
        default:
            resultado = ("Velocidad desconocida");
    }
    return resultado;
}

console.log(velocidadVentilador(2));

const velocidadVentilador2 = (velocidad) => {
    if(velocidad === 0){
        resultado = (`Velocidad ${velocidad} : Apagado`);
    }
    else if(velocidad === 1){
        resultado = (`Velocidad ${velocidad} : Baja`);
    }
    else if(velocidad === 2){
        resultado = (`Velocidad ${velocidad} : Media`);
    }
    else if(velocidad === 3){
        resultado = (`Velocidad ${velocidad} : Alta`);
    }
    else{
        resultado = ("Velocidad desconocida")
    }
    return resultado;
}
console.log(velocidadVentilador2(59));


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/

const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) ); //La tarjeta ha sido pagada
console.log( verficarPagoDeTarjeta( false ) ); // La tarjeta no ha sido pagada

//Version con operador ternario
const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"

/*  
 Dado un número entero, imprimir:

 - "Negativo" si el número es menor que 0
 - "Cero" si el número es igual a 0
 - "Positivo" si el número es mayor que 0 pero menor que 100
 - "Grande" si el número es mayor o igual a 100

 --Realizar una función que reciba el número y retorne el mensaje
 --El retonorno debe ser impreso en la consola
 --Realizar una versión con if-else y otra con operador ternario
*/

//Función que recibe el numero y retorna el mensaje
const verificarNumero = ( numero ) => {
    if( numero < 0 ) {
        return "Negativo";
    } else if( numero === 0 ) {
        return "Cero";
    } else if( numero > 0 && numero < 100 ) {
        return "Positivo";
    } else {
        return "Grande";
    }
    return numero;
}
console.log( verificarNumero( -5 ) ); // "Negativo"
 // Version con operador ternario
const verificarNumeroConTernario = ( numero ) => {
    return numero < 0 ? "Negativo" : 
    numero === 0 ? "Cero" : 
    numero > 0 && numero < 100 ? "Positivo" : 
    "Grande";
}
console.log( verificarNumeroConTernario( 0 ) ); // "Cero"
console.log( verificarNumeroConTernario( 50 ) ); // "Positivo"
console.log( verificarNumeroConTernario( 100 ) ); // "Grande"


//Version con switch
const verificarNumeroConSwitch = ( numero ) => {
    switch( true ) {
        case ( numero < 0 ):
            return "Negativo";
        case ( numero === 0 ):
            return "Cero";
        case ( numero > 0 && numero < 100 ):
            return "Positivo";
        default:
            return "Grande";
    }
}
console.log( verificarNumeroConSwitch( 50 ) ); // "Positivo"
console.log( verificarNumeroConSwitch( 0 ) ); // "Cero"

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


