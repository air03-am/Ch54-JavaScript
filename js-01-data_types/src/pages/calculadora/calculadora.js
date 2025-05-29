/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
 const edad = document.querySelector("birthday").value;

*/

function calcularEdad() {
    const edad = document.getElementById('birthday').value;
    let edadEnMeses = parseInt(edad) * 12;
    document.getElementById("result").innerHTML= `Tu edad en meses es: ${edadEnMeses}`;
}





