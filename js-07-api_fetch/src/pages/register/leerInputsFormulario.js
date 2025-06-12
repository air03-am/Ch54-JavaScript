

const leerInputsFormulario = (formulario) => {
    // creación de objetos 
    const newUser = {
        //van por pares clave: valor
        name: formulario.elements["name"].value, // "MaJo"
        lastName: formulario.elements["family-name"].value, // "Gutiérrez"
        email: formulario.elements["email"].value, // "
        password: formulario.elements["new-password"].value, // "despertar&"
        birthdate: formulario.elements["bday"].value, // "2001-03-01"
        

        checkbox: formulario.elements["terminos-condiciones"].checked, // true o false

    };
    return newUser;

}

export {leerInputsFormulario};