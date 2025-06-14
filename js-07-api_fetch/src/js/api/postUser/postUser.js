// formsubmit.co/documentation


const postUser = async (user, url) => {
    // Para el método POST,, PUT, y DELETE se debe configurar
    // el objeto de configuración con el método fetch

    // objeto
    const options = {
        method: "POST", // Método HTTP: POST, PUT, DELETE o GET
        headers: {
            "Content-Type": "application/json", // Tipo de contenido
            "x-api-key": "reqres-free-v1" // Clave de la API (opcional, depende del servidor)
        },
        body: JSON.stringify(user), // Convertir el objeto a una cadena JSON
    }

    const response = await fetch(url, options); // Enviar la solicitud al servidor
    console.log("Respuesta del servidor:", response);
    if (!response.ok || response.status !== 201 ) {
        // Si la respuesta no es OK, lanzar un error
        throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // si la respuesta es OK, convertir la respuesta a JSON
    const data = await response.json(); // solo es necesario si el servidor devuelve datos en formato JSON

    return data; // Retornar los datos recibidos del servidor

}

export { postUser };
// Esta funcion se encarga de enviar los datos al servidor
