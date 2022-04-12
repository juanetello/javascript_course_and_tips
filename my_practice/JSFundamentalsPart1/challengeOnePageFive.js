console.log('JavaScript Fundamentals – Part 1');
console.log('Coding Challenge #1');

let markHigherBMI = false;

let markMass = 78;
let markHeight = 1.69;
let jhonMass = 92;
let jhonHeight = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let jhonMass2 = 85;
let jhonHeight2 = 1.76;

let juanMass = 85;
let juanHeight = 1.75;

/* 1er formula
const bodyMassIndex = (mass, height) => {

    const result = mass / height ** 2;
    // console.log('Result: ' + result);
    return result;
} */

// refactor 1er formula
const bodyMassIndex = (mass, height) => mass / height ** 2;

console.log('BMI Juan --> ', bodyMassIndex(juanMass, juanHeight));

console.log('BMI Mark 1 --> ', bodyMassIndex(markMass, markHeight));
console.log('BMI Jhon 1--> ', bodyMassIndex(jhonMass, jhonHeight));

console.log('BMI Mark 2 --> ', bodyMassIndex(markMass2, markHeight2));
console.log('BMI Jhon 2--> ', bodyMassIndex(jhonMass2, jhonHeight2));

const markBMI = bodyMassIndex(markMass, markHeight);
const jhonBMI = bodyMassIndex(jhonMass, jhonHeight);

const markBMI2 = bodyMassIndex(markMass2, markHeight2);
const jhonBMI2 = bodyMassIndex(jhonMass2, jhonHeight2);

/* 
 1er intento
if (markBMI > jhonBMI) {
    markHigherBMI = true;
    console.log('Result of markHigherBMI' , markHigherBMI);
} else {
    console.log('Result of markHigherBMI', markHigherBMI);
} */

//refactor 1er intento
// if (markBMI > jhonBMI) markHigherBMI = true;
// console.log('Result of markBMI > jhonBMI', markHigherBMI);

markHigherBMI = markBMI > jhonBMI;
console.log('Result of markBMI > jhonBMI', markHigherBMI);

// if (markBMI2 > jhonBMI2) markHigherBMI = true;
// console.log('Result of markBMI2 > jhonBMI2', markHigherBMI);

markHigherBMI = markBMI2 > jhonBMI2;
console.log('Result of markBMI2 > jhonBMI2', markHigherBMI);






