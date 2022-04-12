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
console.log(`%c Titulo `, titleStyles);
console.log(`%c Parrafo `, paraghapStyles);

console.log(`%c 1 - Qué es JavaScript ? `, titleStyles);
console.log(`%c JavaScript es un lenguaje de scripting que inicialmente fue concebido para correr en navegadores, aunque hoy se puede utilizar también en el servidor de la mano de Node.JS.`, paraghapStyles);
console.log(`%c 2 - Qué es ECMAScript ? `, titleStyles);
console.log(`%c Cuando hablamos de ECMAScript, nos referimos al estándar que determina cómo emplear el lenguaje Javascript.`, paraghapStyles);
console.log(`%c 3 - Cuál es la diferencia entre los operadores (==) , (===), (!=) ? `, titleStyles);
console.log(`%c Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.`, paraghapStyles);
console.log(`%c 4 - Qué es y cómo se crea un Promise ? `, titleStyles);
console.log(`%c Un Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Los Promises se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject , que nos permiten indicarle a esta que se resolvió o se rechazó.`, paraghapStyles);
console.log(`%c 5 - Qué es el Strict Mode en JS ? `, titleStyles);
console.log(`%c  El strict mode es una forma de elegir una variante restringida/estrica de JavaScript.`, paraghapStyles);
console.log(`%c 6 - Cuál es la diferencia entre null y undefined ? `, titleStyles);
console.log(`%c El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los valores primitivos de Javascript.
Undefined Es el valor por default que se le asigna a una variable que esta sin definir aun. Aunque también existe una propiedad global "undefined" que representa uno de los valores primitivos de JS.`, paraghapStyles);
console.log(`%c 7 - Qué es AJAX ? `, titleStyles);
console.log(`%c AJAX significa JavaScript asíncrono y XML (Asynchronous JavaScript and XML)
 Es un conjunto de técnicas de desarrollo que permiten a aplicaciones web enviar datos al servidor y obtener datos sin actualizar la página.`, paraghapStyles);
console.log(`%c 8 - Cuál es la diferencia entre sincronismo y asincronismo ? `, titleStyles);
console.log(`%c En un código síncrono cada operación se hace de una vez, bloqueando el flujo de ejecución de la siguiente mientras se espera una respuesta, cuando esta se procesa pasa a la siguiente operación y así sucesivamente..
Un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución. Es decir, el código asíncrono se ejecutará sin necesidad que el código anterior haya completado su tarea.`, paraghapStyles);
console.log(`%c 9 - Cuál es la diferencia entre Var , let y const ? `, titleStyles);
console.log(`%c VAR es una forma de declarar variables con alcance global o local es decir, sin importar el ámbito del bloque. Su valor podrña ser modificado en cualquier momento.
LET  permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Su valor podrá ser modificado dentro del bloque en el que se esta utilizando.
CONST tiene un alcance igual al de LET , pero la diferencia principal es que es una constante cuyo valor no podrá ser modificado en el futuro.`, paraghapStyles);
console.log(`%c 10 - Qué es el DOM ? `, titleStyles);
console.log(`%c El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un documento y que puede ser manipulada con JS.`, paraghapStyles);
console.log(`%c 11 - Cual es la diferencia entre require e import ? `, titleStyles);
console.log(`%c Por una parte require es una función global introducida por el ambiente de ejecución mientras que import es una nueva sintaxis adicionada al lenguaje. Al ser require una función como otra cualquiera, se puede invocar en cualquier parte del código. Permitiendo de esta forma la carga dinámica de módulos. Esto puede ser bueno o malo dependiendo de como se use, pero haciendo las cosas bien puede hacer que las aplicaciones inicien rápido. Por otra parte import es solo sintaxis y por tanto no puede asignarse a una variable, por lo que la carga de módulos queda definida estáticamente. Esto segundo también puede ser malo o bueno según se mire. Por una parte al ser la relación entre módulos estática su análisis se puede realizar sin ejecutar código lo que permite mejores herramientas de desarrollo y por otra parte tiene la desventaja de ser algo muy rígido.`, paraghapStyles);