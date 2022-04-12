'use strict';

let baseStyles = [
    "color: #808080",
    "background-color: #FFFACD",
    "padding: 2px 4px",
    "border-radius: 2px"
].join(";");

let titleStyles = [
    "color: #000",
    "background-color: #FFFF00",
    "padding: 2px 4px",
    "border-radius: 2px"
].join(";");

let paraghapStyles = [
    "color: #FFFFFF",
    "background-color: #FF0000",
    "padding: 2px 4px",
    "border-radius: 2px"
].join(";");

console.log(`%c JavaScript shorthands `, baseStyles);

console.log(`%c JavaScript declaracion de variables `, titleStyles);

// Normal
let x; // esto creara una variable con valor undefined
console.log('Valor x: ', x);
let y = 20; // esto creara una variable con valor 20
console.log('Valor y: ', y);

// Atajo
let a, b = 20; // esto creara una variable con valor undefined y una con valor 20
console.log('Valor a: ', a);
console.log('Valor b: ', b);

console.log(`%c JavaScript Asignación de valores a múltiples variables  `, titleStyles);
console.log(`%c Utilizando array destructuring podemos asignar valores a multiples variables`, paraghapStyles);

// Normal

let year, month, day;
year = 1987;
month = 10;
day = 18;
console.log(`year ${year} month ${month} day ${day}`);

// Atajo

let [year2, month2, day2] = [1987, 10, 18];
console.log(`year2 ${year2} month2 ${month2} day2 ${day2}`);

console.log(`%c JavaScript Operador ternario ( IF )  `, titleStyles);
console.log(`%c Los operadores ternarios ofrecen una excelente forma de ahorrar
lineas de codigo Ejemplo: operador condicional`, paraghapStyles);

// Normal
let edad = 35;

let resultado;

if (edad >= 40) {
    resultado = 'Eres mayor de 40 años';
} else {
    resultado = 'Eres menor de 40 años'
}

console.log(`Valor de edad es: ${edad}`);
console.log(`el resultado es: ${resultado}`);

// Atajo

let result = edad >= 40 ? 'eres mayor de 40 años' : 'Eres menor de 40 años';

console.log(`Valor de edad es: ${edad}`);
console.log(`Value result : ${result}`);

console.log(`%c JavaScript Operador lógico OR( || )  `, titleStyles);
console.log(`%c Los operadores lógicos amplían las posibilidades de establer condiciones, 
para asignar un valor por default a una variable en caso de que el valor
recibido sea false, null, '' `, paraghapStyles);

/* 
// Normal
let user;

let resultadoOr = requestUserName();

if (resultadoOr !== null && resultadoOr !== undefined && resultadoOr !== '') {
    user = resultadoOr;
} else {
    user = 'Pepe'
}

console.log(`Valor user: ${user}`);

// Atajo

let usuario = requestUserName() || 'Pepe';

console.log(`Valor usuario: ${usuario}`); 
*/

console.log(`%c JavaScript Operador logico AND( && )  `, titleStyles);
console.log(`%c Otro ejemplo en caso de que el valor esperado 
por el resultado de una funcion sea verdadero`, paraghapStyles);

/* 
// Normal
if (usuarioAutorizado) {
    mostrarInfo()
}

// Atajo
usuarioAutorizado && mostrarInfo();
 */

console.log(`%c JavaScript Intercambiar dos variables `, titleStyles);
console.log(`%c Para intercambiar dos variables, generalmente usamos una tercera variable. 
Aunque tambien podemos intercambiar dos variables fácilmente con array destructuring.`, paraghapStyles);

let c = 5, d = 6;
console.log(`Value c Inicio #5: ${c}`);
console.log(`Value d Inicio #6: ${d}`);

//Normal
const valorIntercambio = c;
c = d;
d = valorIntercambio;

console.log(`Value c Normal: ${c}`);
console.log(`Value d Normal: ${d}`);

//Atajo
[c, d] = [d, c];
console.log(`Value c Atajo: ${c}`);
console.log(`Value d Atajo: ${d}`);

console.log(`%c JavaScript Arrow Functions. `, titleStyles);
console.log(`%c Las arrow functions tienen muchísimos beneficios, 
entre los que se encuentra la posibilidad de retornar 
directamente un resultado si el cuerpo de ésta sólo ocupa una sola linea, 
sin necesidad de usar {}.`, paraghapStyles);

//Normal 

function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(1, 3));

//Atajo

const sumarArrow = (num1, num2) => num1 + num2;
console.log(sumarArrow(1, 3));

console.log(`%c JavaScript Template Literals `, titleStyles);
console.log(`%c Normalmente usamos el operador + para concatenar strings con variables dinámicas. 
 Los template literals permiten hacer esto de una forma mucho mas sencilla. 
 Si bien naturalmente no es una forma de disminuir lineas de código, 
 si es una forma mas cómoda de usar datos dinámicos usando comillas invertidas o "backticks".`, paraghapStyles);

let numeroTelefonico = 2615338182;
let hora = new Date();
console.log(hora.getHours);
console.log(hora.getDate);
console.log(hora.getTime);
console.log(hora.getUTCHours);

let horaLlamada = '19:00';

//Normal

console.log('Llamada perdida de ' + 5492312 + ' a la hora ' + '19:00');


//Atajo 

console.log(`Llamada perdida de ${numeroTelefonico} a la hora ${horaLlamada}`);

console.log(`%c JavaScript Cadenas de texto multilineales `, titleStyles);
console.log(`%c Para cadenas de varias líneas, normalmente usamos el operador + 
con una nueva secuencia de escape de línea (\ n). 
Esto también podemos hacerlo de una manera más fácil con "backticks".`, paraghapStyles);

//Normal

console.log('JavaScript, normalmente llamado JS, es un\n' + 'lenguaje de programacion que se ajusta al\n' +
    'estandar ECMAScript. JavaScript es un lenguaje multiproposito\n' +
    'y multiparadigma');


//Atajo

console.log(`JavaScript, normalmente llamado JS, es un lenguaje de programacion que se ajusta al estandar ECMAScript. JavaScript es un lenguaje multiproposito y multiparadigma`);

console.log(`%c JavaScript Comprobación de múltiples condiciones. `, titleStyles);
console.log(`%c Para la coincidencia de valores múltiples, podemos poner todos los 
valores en una matriz y usar el método indexOf () o includes (). 
Aterrizemos la idea con un poco de código en el siguiente ejemplo..`, paraghapStyles);

let valor = 4;

//Nomal
if (valor === 5 || valor === 'cinco' || valor === 6 || valor === 'seis') {
    // Ejecutar algo...
    console.log(`hola Normal`)
}

console.log([5, 'cinco', 6, 'seis'].indexOf(valor));

// Atajo 1
if ([5, 'cinco', 6, 'seis'].indexOf(valor) >= 0) {
    // Ejecutar algo...
    console.log(`hola 2 Atajo 1`)
}

console.log([5, 'cinco', 6, 'seis'].includes(valor));
// Atajo 2
if ([5, 'cinco', 6, 'seis'].includes(valor)) {
    // Ejecutar algo...
    console.log(`hola 3 Atajo 2`)
}

console.log(`%c JavaScript Asignación de propiedades en objetos. `, titleStyles);
console.log(`%c Si el nombre de una variable coincide con el nombre de la variable de un objeto, 
esta será una conveniente forma de ahorrar lineas de código, ejemplo.`, paraghapStyles);

let firstname = 'Jonatan';
let lastname = 'Waibsnaider';

// Normal
let obj = {
    firstname: firstname,
    lastname: lastname
};
console.log(`Valor Objeto Normal ${JSON.stringify(obj)}`)

// Atajo
let objShortcut = {
    firstname,
    lastname
};
console.log(`Valor Objeto Atajo ${JSON.stringify(objShortcut)}`)

console.log(`%c JavaScript Convertir string a number con el operador +. `, titleStyles);
console.log(`%c Normalmente utilizamos parseInt o parseFloat para convertir strings a números 
pero existe un atajo para esto en Js, veámoslo.`, paraghapStyles);

// Normal
let total = parseInt('453');
let ventas = parseFloat('42.6');
console.log(`Valores total ${total}, ventas ${ventas}, Normal`)

// Atajo 
let totalShortcut = +'453'; //typeof Number
let ventasShortcut = +'42.6'; //typeof Number
console.log(`Valores total ${totalShortcut}, ventas ${ventasShortcut}, Atajo`)

let edadJuan = '35'
let edadJuanNum = +'35';

console.log(`Valores edadJuanNum ${edadJuanNum} de tipo ${typeof edadJuanNum}, edadJuan ${edadJuan} y de tipo ${typeof edadJuan}, Atajo`)

console.log(`%c JavaScript Repetir una cadena de texto múltiples veces. `, titleStyles);
console.log(`%c Habitualmente utilizamos bucles para repetir determinados bloques de código 
que cumplan algún tipo de lógica. En el caso de repetir una cadena de texto 
muchas veces tenemos una función nativa de JS que nos provee de esta funcionalidad.`, paraghapStyles);

// Normal
let string = '';
for (let i = 0; i < 5; i++) {
    string += 'Perro ';
}
console.log(string);

// Atajo
'Perro '.repeat(5);
console.log('Perro '.repeat(5));

console.log(`%c JavaScript Potencia de un numero X. `, titleStyles);
console.log(`%c Podemos usar el método Math.pow() para encontrar la potencia de un número. 
Hay una sintaxis más corta para hacerlo con doble asterisco (**).`, paraghapStyles);

// Normal 
const power = Math.pow(4, 3);
console.log(`Valores power Normal con Math.pow()${power}`)

// Atajo 
const powerShortcut = 4 ** 3;
console.log(`Valores powerShortcut con **  ${powerShortcut}`)

console.log(`%c JavaScript Encontrar un numero máximo o mínimo en un array. `, titleStyles);
console.log(`%c Podemos usar el bucle for para recorrer cada valor de la matriz 
y encontrar el valor máximo o mínimo. También podemos usar el método Array.reduce () para esto. 
Pero usando el spread operator podemos hacerlo en una sola línea.`, paraghapStyles);

const numberArray = [2, 8, 15, 4, 10, 20, 30, 40];
console.log(JSON.stringify(numberArray));
console.log('Math.max', Math.max(...numberArray));
console.log('Math.min', Math.min(...numberArray));

console.log(`%c JavaScript For loop. `, titleStyles);
console.log(`%c Para recorrer una matriz, normalmente usamos el tradicional bucle for. 
Podemos hacer uso del bucle for ... of para iterar a través de matrices. 
Para acceder al índice de cada valor podemos usar for ... in loop.
Extra Pro-tip: También podemos utilizar for in para recorrer las propiedades de un objeto.`, paraghapStyles);

// let numberArray = [10, 20, 30, 40]; 

// Normal 
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}

// Atajo for of 
for (const val of numberArray) {
    console.log('for of ', val);
}

// Atajo for in 
for (const index in numberArray) {
    console.log(`index: ${index} val: ${numberArray[index]}`);
}


console.log(`%c JavaScript Concatenar arrays.`, titleStyles);

let initialArray = [20, 30];
console.log(initialArray)

// Normal
let normalConcat = initialArray.concat([60, 80]);
console.log(normalConcat)

// Atajo
let shortcutConcat = [...initialArray, 60, 80];
console.log(shortcutConcat)

console.log(`%c JavaScript Obtener un carácter de una cadena de texto.`, titleStyles);

let str = 'Obtener un carácter de una cadena de texto';

// Normal
let stringChar = str.charAt(2);
console.log(stringChar)

// Atajo
console.log(str[2])

console.log(`%c JavaScript Exponentes de base decimal .`, titleStyles);
console.log(`%c Es posible que hayas visto este, o tal vez no! 
Es esencialmente una forma elegante de escribir sin ceros. 
1e7 significa 1 seguido de 7 ceros; representa una base decimal 
(JS interpreta como un tipo flotante) igual a 10,000,000.`, paraghapStyles);

// Normal
for (let i = 0; i < 10000; i++) { }

// Atajo
for (let i = 0; i < 1e4; i++) { }

console.log(`%c JavaScript Parametros por Default.`, titleStyles);

// Normal
function sumar(a, b) {
    if (!a) {
        a = 1;
    }
    if (!b) {
        b = 2;
    }
    return a + b;
}

// Atajo
function sumar(a = 1, b = 2) {
    return a + b;
}


/* 
20 JS tips more................................
https://twitter.com/kirillinoz/status/1506668480350859271?t=fTj3lta4DrclURvF5ZLMWA&s=08
 */

console.log(`%c JavaScript Shuffle an array.`, titleStyles);
console.log(`%c Agregar desc.`, paraghapStyles);

let array = ['🦅', 67, true, false, '45'];
console.log('Original array: ', array);

array = array.sort(() => 0.5 - Math.random());

console.log('After Math.random array', array);

console.log(`%c JavaScript Remove every character except numbers.`, titleStyles);
console.log(`%c Agregar desc.`, paraghapStyles);

const stringTwist = 'W0w wh4t 4 c001 53nt3nce!';

const numbers = stringTwist.replace(/\D/g, '');
console.log(numbers);
console.log(stringTwist);
console.log(stringTwist.replace(/\D/g, 'A'));


const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p);
console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));

console.log(`${regex}`);

console.log(`HOlissssssssss la puta que te pariiiiiiiooooooooo `);

const texto = `Texto original`;
console.log(texto);
console.log(texto.replace('original', 'modificado'));