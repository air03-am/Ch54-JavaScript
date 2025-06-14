

const leerInputsFormulario = (formulario) => {
    // creación de objetos 
    const newUser = {
        //van por pares clave: valor
        name: formulario.elements["name"].value.trim(), // "MaJo"
        lastName: formulario.elements["family-name"].value.trim(), // "Gutiérrez"
        email: formulario.elements["email"].value.trim(), // "
        password: formulario.elements["new-password"].value.trim(), // "despertar&"
        birthday: formulario.elements["bday"].value, // "2001-03-01"
        checkbox: formulario.elements["terminos-condiciones"].checked, // true o false

        //.trim() elimina los espacios en blanco al inicio y al final de la cadena (Sanitización de datos)

    };

    console.table(newUser); // Muestra el objeto en la consola como una tabla para facilidad de lectura
    return newUser;

}


export {leerInputsFormulario};