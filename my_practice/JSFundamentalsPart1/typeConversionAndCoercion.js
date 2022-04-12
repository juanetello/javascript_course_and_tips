console.log('TYPE CONVERSION');

const inputYear = '1987'
console.log(Number(inputYear), inputYear); // 1987 '1987', first "number" was the result of Number... 
console.log('Caso 1 ', inputYear + 18); //198718 concat the "strig", with the number(18).
console.log('Caso 2 ', Number(inputYear) + 18); // 2005 add the number(18) to the inputYear

//If I have an invalid conversion, for example, I want to convert "Juan" to a Number, this is the result.
console.log(Number('Juan')); // NaN
console.log(typeof NaN); // Number 🤔

console.log(String(7), 7);


console.log('TYPE COERCION');
console.log('I am ' + 34 + ' years old'); // I am 34 years old
console.log('23' - '10' - 3); //10
console.log('23' + '10' + 3); //23103
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

//GAME

let n = '1' + 1;
n = n -1;
console.log('Value n: ' , n);

let m = 2 + 3 + 4 + '5';
console.log('Value m: ' , m);

let y = '10' - '4' - '3' - 2 + '5';
console.log('Value y: ' , y);