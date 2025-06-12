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

const vueltasAleatorias = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;


const irPorElElote = (horaDelDia) => {

    // const miPromesa = new Promise( fncCallBack  );
    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("Voy por el elote en la " + horaDelDia); // esta tarea pude demorar mucho o poco
        if (horaDelDia === "día" || horaDelDia === "tarde") {
            fncCallBackResolve({ mensaje: "Toma tu elote que está dentro de una bolsa", vueltas: vueltasAleatorias() });
        } else {
            fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" });
        }
    });

    return miPromesa;
}


/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

const numDeVueltas = (number) => {

    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("el numero de vueltas es: " + number);
        if (number <= 2) {
            fncCallBackResolve("ñomi ñomi, me comi mi elote");
        } else {
            fncCallBackReject({ error: 404, descripcion: "upss se me cayo el elote" });
        }
    });
    return miPromesa;
}
/*
 La función se llama ponerChilito()
 La función NO tiene parámetros de entrada 
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica";

 La función no debe tener reject.

 */
const ponerChilito = () => {
    const miPromesa = new Promise((resolve) => {
        resolve("Chilito del que pica");
    });
    return miPromesa;
}
// Otra forma de crear una promesa
const ponerChilito2 = Promise.resolve("Chilito del que pica");

// miFuncionPromesa().then( callback ).catch( callback ).finally( callback );
/*
irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa", response) );

irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response) )
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );
*/
// Ya tengo mi elote, pero falta abri la bolsa

/*
const tiempo = "tarde"; 
irPorElElote( tiempo )
    .then( ( response )=> { //promesa 1
        console.log("Promesa", tiempo, response);
        numDeVueltas( response.vueltas )
        .then( response => { // promesa 2
            console.log( tiempo, response )
            ponerChilito()
            .then( resolve => console.log("Promesa Chilito", resolve)) // promesa 3
        })
        .catch((error) => console.log( error));
    })
    .catch((error) => console.log("Promesa rechazada:", error)) // si la promesa es rechazada se ejecuta el catch
    .finally( () => console.log("Se ha terminado tu promesa")); 
*/

/*
const tiempo = "tarde"; 
irPorElElote( tiempo )//promesa 1
    .then( ( response )=> { 
        console.log("Promesa", tiempo, response);
        return numDeVueltas( response.vueltas ); // promesa 2
    }) // promesa 1 resuelta
    .then((response)=> {// promesa 2 resuelta
        console.log( "Promesa no.Vueltas", response);
        return ponerChilito(); // promesa 3
    }) 
    .then((response) => console.log("Promesa Chilito", response)) // promesa 3 resuelta
    .catch((error) => console.log("Promesa rechazada:", error)) // 1 catch para todas las promesas
    .finally( () => console.log("Se ha terminado tu promesa")); 
*/

// ============= Uso de async/await =============
// mi funcion debe de llevar la palabra reservada async
const crisQuiereElote = async () => {
    try {
        const tiempo = "tarde";
        const response = await irPorElElote(tiempo)//promesa 1
        console.log(response); // promesa 1 resuelta
        const respuestaBolsa = await numDeVueltas(response.vueltas); // promesa 2
        console.log(respuestaBolsa); // promesa 2 resuelta
        const mensajeFinal = await ponerChilito(); // promesa 3
        console.log(mensajeFinal); // promesa 3 resuelta
    } catch (error) { //atrapamos el error de todas las promesas
        console.log("Promesa rechazada:", error); // 1 catch para todas las promesas
    }
}

console.log("Inicio de la función crisQuiereElote");
await crisQuiereElote();
console.log("Fin de la función crisQuiereElote");


// =============== Uso de la API Fetch ===============


//funciones expresadas: async function myFunction() { ... }
//funciones flecha: const myFunction = async () => { ... }

const leerProductos = async (url) => {

    try {
        // funcion asinc que retorna una promesa
        const response = await fetch(url); //hicimos una peticion http a un servidor y obtuvimos los datos en formato json
        //console.log(response); // Muestra el objeto Response de la petición
        const datosApi = await response.json(); // convertir de JSON a un objeto de JavaScript
        console.log(datosApi); // Muestra los datos obtenidos de la API
        return datosApi; // Retorna los datos obtenidos de la API
    } catch (error) {
        console.log("No se pudo obtener los datos de la API:", error);
    }

}

const construirTarjetasDERickAndMorty = (personajes) => {
    const tarjetas = personajes.map((personaje, index, array) => (
        `<div class="col-10 col-md-6 col-lg-3 mb-3">   
            <div class="card">
            <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.status}</p>
                    <a href="#" class="btn btn-primary">${personaje.species}</a>
                </div>
            </div>
        </div> `
    )); // Mapea los personajes a tarjetas HTML
    return tarjetas;
}

const insertarTarjetasEnElDOM = (tarjetas, idDOM = "cards") => {
    const refDOM = document.getElementById(idDOM); // Obtiene la referencia del elemento con el id "cards"
    refDOM.innerHTML = refDOM.innerHTML + tarjetas.join(""); // Inserta las tarjetas en el DOM
    // join() convierte el array de tarjetas en una cadena de texto
    // y lo asigna al innerHTML del elemento con el id "cards"
}

const crearCardsDeRickAndMorty = async (link) => {
    const data = await leerProductos(link); // Llama a la función leerProductos con el enlace de la API
    const personajes = data.results; // Accedemos a los resultados de la API
    console.log(personajes); // Muestra los personajes obtenidos de la API
    const tarjetas = construirTarjetasDERickAndMorty(personajes); // Construye un array en forma de tarjetas 
    insertarTarjetasEnElDOM(tarjetas); // Inserta las tarjetas en el DOM



}



crearCardsDeRickAndMorty("/public/json/rick.json"); // pagina 1

