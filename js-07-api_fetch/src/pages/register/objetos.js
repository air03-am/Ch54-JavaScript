
// trabajo con arreglos
const myArray = [1, 2, 3, 4];

const unionArray = myArray.join(" - "); // 1 - 2 - 3 - 4
myArray.push(5, 6, 7, 8); // [1,2,3,4,5,6,7,8]

const arrayData = myArray[3]; // 4

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
}


const myObj = { // objeto 
    //van por pares clave: valor
    //atributo : valor
    "atributo con espacios": true, // clave con espacios
    key: "valor",
    name: "MaJo",
    firsName: "María José",
    email: "airamjgr@gmail.com",
    password: "despertar&",
    birthdate: "2001-03-01",
    isActive: true,
    hobbies: ["Despertar personas", "verdades incomodas", "Comer pure"],
    favoritos: {
        bebidas: ["Agua", "Pozol", "Agua de tamarindo"],
        comidas: ["Pozole", "tacos de suadero"]
    },

    // métodos/función (sinonimos)
    saludar: function myFunction(persona) {
        console.log(`Hola ${persona}`);
    }
};

const ejecutarObjetos = () => {

    // leer datos de un objeto el operador de acceso es el punto (.) para acceder a los atributos del objeto
    console.log(myObj); // {key: "valor", name: "MaJo", firsName: "María José", email: ...}"

    const nombrePersona = myObj.name; // "MaJo"
    const favoritos = myObj.favoritos.bebidas; // ["Agua", "pozol", "Aguad de tamarindo"]
    const segundaBebida = favoritos[1]; // "Pozol"
    const terceraBebida = myObj.favoritos.bebidas[2]; // "Agua de tamarindo"

    //acceder al atributo firstName
    /*
     - Más legible y corta
     - Usada comunmente y preferida cuando conocemos el nombre del atributo
    */
    const primerNombre = myObj.firsName; // "María José"

    // otra forma de acceder a los atributos de un objeto es usando los corchetes []
    /*
     - Soporta nombres con espacio, simbolos o dinámicos
        - Se usa cuando no conocemos el nombre del atributo o es dinámico
        - No es tan legible como el punto (.)  
    */
    const primerNombre2 = myObj["firsName"]; // "María José"

    // ejercutar funciones de un objeto
    const mensaje = myObj.saludar("MaJo"); // "Hola MaJo"
    console.log(mensaje); // undefined porque la función no retorna nada


    // --------------- Optional Chaining ---------------
    // Sirve para acceder a propiedades de objetos de forma segura,  evitando
    // errores si alguna propiedad intermedia no existe (es undefined o null).
    // const primeraComida = myObj.favoritos.alimentos[0]; // undefined, porque "alimentos" no existe
    //const primeraComida = myObj?.favoritos?.alimentos[0]; // si no existe retorna undefined a toda la linea 


    // iterar un objeto
    // for in itera sobre los atributos de un objeto
    for (let clave in myObj) {
        console.log(clave, myObj[clave]); //myObj.name, myObj.firsName, myObj.email, ...
        // clave es el nombre del atributo y myObj[clave] es el valor del atributo

    }
}

export {ejecutarObjetos};
