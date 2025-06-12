import { insertMainHeader } from "../../modules/header/header.js"; // imoortación nombrada, solo es la referencia aun hay que invocarla


import footer from "../../modules/footer/footer.js"; //importación por default y cambio de nombre, solo se puede hacer con este tipo de impoortación 


insertMainHeader(document.getElementById("header")); //invocación de la función y paso del argumento (id declarado en html con el nombre header)


footer(document.getElementById("footer"));
/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)

 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón

*/

const irPorElElote = ( horaDelDia ) => { // funcion asíncrona que retorna una promesa
    // Se crea un objeto de clase tipo Promise
    //const myPromesa = new Promise( fncCallBack );
    //Puedo hacer ahí mismo mi CallBack 
    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject ) => {
        console.log("Voy por el elote en la " + horaDelDia); //esta tarea puede demorar mucho o poco tiempo
        if(horaDelDia === "día" || horaDelDia === "tarde") {
            fncCallBackResolve("Toma tú elote que está dentro de una bolsa"); // Resuelve la promesa
        } else {
            fncCallBackReject({error: 404, descripcion: "Elote no fue encontrado"}); // Rechaza la promesa
        }    
    });
    return miPromesa;
}
/**
 * Realizar una función de tipo Promise que reciba lo siguiente
 * @param{string} el numero de vueltas de ammare de la bosal
 * 
 *  -La promesa se resuelve si el numero de vueltas es menor o igual a 2
 *  -Se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  -Si numero de vueltas es mayor a 2, la pomesa se rechaza
 *  -con el texto "ups, se me cayó el elote"
 */

const abrirLaBolsa = ( numeroDeVueltas ) => { 
    const miPromesa = new Promise((resolve, reject ) => {
        console.log("Abriendo la bolsa del elote " + numeroDeVueltas + " vueltas"); 
        if(numeroDeVueltas <= 2) {
            resolve("ñomi ñomi, me como mi elote"); 
        } else {
            reject({error: 404, descripcion: "ups, se me cayó el elote"}); 
        }    
    });
    return miPromesa;
}

// Llamada a la promesa
// es como un if si se resuelve la promesa entra a then y si se rechaza entra a catch y opcionalmente tenemos finally que es una callback que se ejecuta siempre
// miFuncionPromesa().then(callback).catch(callback).finally(callback);

// Llamada a la promesa
// irPorElElote("tarde")
//para manejar la promesa se utiliza el método then y catch, si es favorable se ejecuta:
//    .then((response) => console.log("1raPromesa", response));

//irPorElElote("Noche")
//    .then((response) => console.log("2daPromesa", response))
//    .catch((error) => console.log("Promesa rechazada:", error)) // si la promesa es rechazada se ejecuta el catch
//    .finally( () => console.log("Se ha terminado tu promesa")); // se ejecuta siempre, independientemente de si la promesa fue resuelta o rechazada


// Ya tengo el elote, pero falta abrir la bolsa
const tiempo = "tarde"; // Defino la hora del día
irPorElElote(tiempo) //estado pending 
    .then((response) => {
        console.log("1raPromesa", response);
        const vueltas = 2; // Defino el número de vueltas
        abrirLaBolsa(vueltas) // Llamo a la segunda promesa
        .then((response) => console.log(response)) // Si se resuelve la segunda promesa
        .catch((error) => console.log( error))
        .finally( () => console.log("Se ha terminado tu promesa 2")); 
    })
    .catch((error) => console.log("Promesa rechazada:", error)) // si la promesa es rechazada se ejecuta el catch
    .finally( () => console.log("Se ha terminado tu promesa")); 
