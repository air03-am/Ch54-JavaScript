
const validateName = (name) => {
    const result = { // objeto con atributos 
        isValid: true,
        errors: []
    };


    if( name === "") { //podemos usar otro tipo de validación
        result.isValid = false;
        result.errors.push("El nombre no debe estar vacío.");
    } else if (name.length < 3 ){
        result.isValid = false;
        result.errors.push("El nombre debe tener al menos 3 caracteres.");
    }
    return result;
}


export { validateName };