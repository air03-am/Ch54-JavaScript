
/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */

// no se necesita la extención .js ya que estamos utilizando un bundle (empquetador)

import { validateName } from "../../../src/utils/validations/validateName";

// test("mensaje de la prueba", ()=>{}); 

/*
 .toBe(expected)
 Propósito: Compara valores primitivos (números, strings, booleanos, null, undefined)
 para una igualdad estricta (similar a === ).
 También compara objetos por referencia (si son exactamente el mismo objeto en memoria)


 .toEquals(expected)
 Propósito: Compara la igualdad profunda de objetos y arrays.
 Jest recorre recursivamente las propiedades d elos objetos o 
 los elementos de los arrays para verificar que sus contenidos
 son equivalentes, no solo que sean la misma referencia en memoria.
 https://jestjs.io/es-ES/docs/expect#toequalvalue
*/

test("Debe aceptar un nombre valido", ()=>{
    // expect(valorRecibido).matcher(valorEsperado); //matcher hace las comparaciones que necesitamos
    const response = validateName("Abril");
    expect(response.isValid).toBe(true);
    // El arreglo de errors debe estar vacio
    expect(response.errors.length).toBe(0);
    expect(response.errors).toEqual([]);
});
/*
 .toBeTruthy()
 Propósito: Verfica si un valor es "truthy" (evalúa a true en un contexto booleano).
 Esto incluye valores como true, números distintos de cero, strings no vacíos, objetos y arrays

 .toBeFalsy()
 Propósito: Verfica si un valor es "falsy" (evalua a false en un contexto booleano).
 Esto incluye valores como false, 0, -0, null, undefined, NaN y el string vacio "".

 .toBeGreaterThan(number) / .toBe.GreaterThanOrEqual(number)
 Propósto: Compara si un número es mayor que, o mayor o igual que, otro.

 .toBeLessThan(number) / .toBe.LessThanOrEqual(number)
 Propósto: Compara si un número es menor que, o menor o igual que, otro.

 */


test("Debe rechazar un nombre vacio", () => {
    const response = validateName("");
    expect(response.isValid).toBe(false);
    expect(response.isValid).toBeFalsy();
    expect(response.errors.length > 0).toBeTruthy();
    expect(response.errors.length).toBeGreaterThan(0);
});
