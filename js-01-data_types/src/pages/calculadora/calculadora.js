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
document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.querySelector('#birthday');
    const calculateButton = document.getElementById('#calculate');
    const result = document.getElementById('result');

    const validateAge = (value) => {
        if (value.trim() === '') return 'Por favor, ingresa tu edad';
        if (isNaN(value)) return 'La edad debe ser un número';
        if (value < 0) return 'La edad no puede ser negativa';
        return null; //no hay errores
    }


    
    

const edad = document.querySelector('#birthday').value;
const buttonCalcular = document.querySelector('calculate');

buttonCalcular.addEventListener('click', () => {
    // Obtener el valor del input y convertirlo a número
    const edadEnAnios = Number(edad.value);
    // Calcular la edad en meses
    const edadEnMeses = edadEnAnios * 12;
    // Mostrar el resultado
    resultado.textContent = `Tu edad en meses es: ${edadEnMeses}`;
});
// 4. Usar conversión explícita de string a número (parseInt o Number).


// 5. Agregar los elementos al DOM
document.body.appendChild(inputEdad);
document.body.appendChild(buttonCalcular);
document.body.appendChild(resultado);

// 6. Estilo CSS
const style = document.createElement('style');
style.textContent = `
    input {
        margin: 10px;
        padding: 5px;
        font-size: 16px;
    }
    button {
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
    }
    p {
        font-size: 18px;
        color: blue;
    }
`;
document.head.appendChild(style);
// 7. Agregar un título     
const title = document.createElement('h1');
title.textContent = 'Calculadora de Edad en Meses';
document.body.insertBefore(title, inputEdad);
// 8. Agregar un mensaje de bienvenida
const welcomeMessage = document.createElement('p');


welcomeMessage.textContent = 'Bienvenido a la calculadora de edad en meses. Ingresa tu edad en años y presiona "Calcular".';
document.body.insertBefore(welcomeMessage, inputEdad);


