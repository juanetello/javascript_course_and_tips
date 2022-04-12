'use strict';

console.log(`JS Fundamentals Part 2`);
const myName = 'Juan';

function logger(name){
    console.log(`Hi ${name}, it's great that you are here!!`);
}

logger(myName);
logger(myName);
logger(myName);

function fruitProcessor(apples, oranges){
    console.log('Parameters: ', apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}

const appleJuices = fruitProcessor(5,0);
console.log(appleJuices);

const mixJuices = fruitProcessor(3,3);
console.log(mixJuices);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);