console.log('JavaScript Fundamentals – Part 1');
console.log('Coding Challenge #2');

let markHigherBMI = false;
let markHigherBMI2 = false;

let markMass = 78;
let markHeight = 1.69;
let jhonMass = 92;
let jhonHeight = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let jhonMass2 = 85;
let jhonHeight2 = 1.76;

/* 1er formula
const bodyMassIndex = (mass, height) => {

    const result = mass / height ** 2;
    // console.log('Result: ' + result);
    return result;
} */

// refactor 1er formula
const bodyMassIndex = (mass, height) => mass / height ** 2;

console.log('BMI Mark 1 --> ', bodyMassIndex(markMass, markHeight));
console.log('BMI Jhon 1--> ', bodyMassIndex(jhonMass, jhonHeight));

console.log('BMI Mark 2 --> ', bodyMassIndex(markMass2, markHeight2));
console.log('BMI Jhon 2--> ', bodyMassIndex(jhonMass2, jhonHeight2));

const markBMI = bodyMassIndex(markMass, markHeight);
const jhonBMI = bodyMassIndex(jhonMass, jhonHeight);

const markBMI2 = bodyMassIndex(markMass2, markHeight2);
const jhonBMI2 = bodyMassIndex(jhonMass2, jhonHeight2);

markHigherBMI = markBMI > jhonBMI;
console.log('Value of markHigherBMI', markHigherBMI);
markHigherBMI2 = markBMI2 > jhonBMI2;
console.log('Value of markHigherBMI2', markHigherBMI2);

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Jhon's BMI is higher than Mark's!");
}

if (markHigherBMI2) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Jhon's BMI is higher than Mark's!");
}


if (markHigherBMI) {
    console.log('First case');
    console.log(`Mark's BMI ${markBMI.toFixed(2)} is higher than John's ${jhonBMI.toFixed(2)}!`);
} else {
    console.log('First case');
    console.log(`Jhon's BMI ${jhonBMI.toFixed(2)} is higher than Mark's ${markBMI.toFixed(2)}!`);
}

if (markHigherBMI2) {
    console.log('Second case');
    console.log(`Mark's BMI ${markBMI2.toFixed(2)} is higher than John's ${jhonBMI2.toFixed(2)}!`);
} else {
    console.log('Second case');
    console.log(`Jhon's BMI ${jhonBMI2.toFixed(2)} is higher than Mark's ${markBMI2.toFixed(2)}!`);
}