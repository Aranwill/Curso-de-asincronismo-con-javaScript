// Esta es una función llamada 'sum' que toma dos argumentos: num1 y num2.
function sum(num1, num2) {
  // La función devuelve la suma de num1 y num2.
  return num1 + num2;
}

// Esta es una función llamada 'calc' que toma tres argumentos: num1, num2 y callback.
function calc(num1, num2, callback) {
  // La función devuelve el resultado de la función 'callback', pasando num1 y num2 como argumentos.
  return callback(num1, num2);
}

// Aquí se llama a la función 'calc' con 2, 2 y la función 'sum' como argumentos.
// El resultado se imprime en la consola.
console.log(calc(2, 2, sum));

//En resumen, este código define dos funciones: sum y calc. La función sum simplemente suma dos números. La función calc es un poco más interesante porque toma una función de devolución de llamada (callback) como uno de sus argumentos. Luego llama a esta función de devolución de llamada con los otros dos argumentos que recibe. Finalmente, el código llama a calc con los números 2 y 2 y la función sum como argumentos, luego imprime el resultado (que es 4) en la consola. Es un buen ejemplo de cómo las funciones en JavaScript pueden ser pasadas como argumentos a otras funciones.

/**------------------------------------------------------------*/

// SETTIMEOUT

setTimeout(function () {
  console.log('Hola JavaScript');
}, 4000);

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Hector');
//se pasa primero la función, de segundo el tiempo de espera y el argumento
