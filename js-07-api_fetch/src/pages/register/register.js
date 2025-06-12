import { insertMainHeader as menu} from "../../modules/header/header.js"; 
import footer from "../../modules/footer/footer.js";
import { ejecutarObjetos } from "./objetos.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";


menu(document.getElementById("header")); 
footer(document.getElementById("footer"));
ejecutarObjetos(); // Ejecuta la función para trabajar con objetos

//evento para escuchar el click del botón de registro
const registerForm = document.getElementById("contactForm");
registerForm. addEventListener("submit", ( e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Aquí puedes manejar el formulario, por ejemplo, enviar los datos a un servidor
    console.log("Manejo del formulario");
    // console.log(e);

    // Obtener los datos del formulario
    const newUser = leerInputsFormulario(registerForm);
    console.log(newUser); // Muestra los datos del formulario en la consola

    //Validar los datos


    // si los datos son válidos, puedes enviar el formulario usando api fetch
        // usando la api fetch, con el método POST enviar el formulario
            // = Enviar un mensajae al usuario, limpiar el formualrio, redirigir la página

            // = Enviar al usuario el error del servidor 

    // si los datos no son válidos enviar un mensaje al usuario 
} );