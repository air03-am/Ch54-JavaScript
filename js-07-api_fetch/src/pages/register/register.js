import { insertMainHeader as menu } from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { ejecutarObjetos } from "./objetos.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { isUserValid } from "../../js/validations/isUserValid.js"; 
import { postUser } from "../../js/api/postUser/postUser.js";  

menu(document.getElementById("header"));
footer(document.getElementById("footer"));
ejecutarObjetos(); // Ejecuta la función para trabajar con objetos

//evento para escuchar el click del botón de registro
const registerForm = document.getElementById("contactForm");
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Aquí puedes manejar el formulario, por ejemplo, enviar los datos a un servidor
    console.log("Manejo del formulario");
    // console.log(e);

    // Obtener el objeto con los datos del formulario
    const newUser = leerInputsFormulario(registerForm);

    const validatedUser = isUserValid(newUser); // Importa la función isUserValid desde el archivo correspondiente

    //Validar los datos
    // variable con atributo isValid que indica si los datos son válidos o no
    if (validatedUser.isValid) {
        // si los datos son válidos, puedes enviar el formulario
        try {
            // Enviar los datos al servidor usando la función postUser
            const response = await postUser(newUser, "https://reqres.in/api/users");
            alert("Formulario enviado correctamente" + response.createdAt); // Mensaje de éxito al usuario
        } catch (error) {
            // Si ocurre un error al enviar los datos, mostrar un mensaje al usuario
            alert("Error al enviar el formulario: " + error.message); //error del servidor
        }
        // = Enviar un mensaje al usuario, limpiar el formualrio, redirigir la página
        // usando la api fetch, con el método POST enviar el formulario
    } else {
        // si los datos no son válidos enviar un mensaje al usuario
        alert(validatedUser.errors.join("\n")); // Muestra los errores de validación al usuario
    }

        // = Enviar al usuario el error del servidor 

});