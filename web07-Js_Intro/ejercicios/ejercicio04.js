// Ejercicio 4: Cambiar el nombre en el DOM

function newName(){
        // Mostrar mensaje con alert
    alert("¡Vamos a cambiar tu nombre!");
    
    // Pedir nuevo nombre con prompt
    const nuevoNombre = prompt("¿Cuál es tu nombre?");
    // Validar entrada y actualizar DOM
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        document.getElementById("name").innerHTML = nuevoNombre;
        // Mostrar mensaje de éxito
        alert("¡Nombre cambiado con éxito!");
    }
    // Si el usuario cancela o no ingresa un nombre, no hacer nada
    else {
        alert("No se ha cambiado el nombre.");
        document.getElementById("name").innerHTML = "nombre";
    }
    
}

