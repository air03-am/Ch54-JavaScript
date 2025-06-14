import { validateName } from "./validateName.js";


/**
 * Valida si un usuario es válido.
 * @param {object} user  // Objeto que representa al usuario a validar.
 * @property {string} user.name - Nombre del usuario.
 * @property {string} user.email - Correo electrónico del usuario.
 * @property {string} user.password - Contraseña del usuario.
 * @returns 
 */
const isUserValid = (user) => {
    const result = { // objeto con atributos 
        isValid: true,
        errors: []
    };
    /*
    Validar el nombre del usuario
    */
    const nameValidation =  validateName(user.name);
    if (nameValidation.isValid === false) { // esto es igual que !nameValidation.isValid
        // Si la validación del nombre falla, actualizamos el resultado
        result.isValid = false;
        result.errors.push(nameValidation.errors);
    }

    // validar el correo electrónico


    // Validar la contraseña


    // Validar la fecha de nacimiento

    // Validar si se aceptan los términos y condiciones
    if (!user.checkbox) {
        result.isValid = false;
        result.errors.push("Debe aceptar los términos y condiciones.");
    }
    return result;
}

export { isUserValid };