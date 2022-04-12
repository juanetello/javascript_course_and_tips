console.log('OPERATORS PRECEDENCE');

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

// Math operators
const year = 2021;
const ageJuan = year - 1987;
const ageGaby = year - 1988;

console.log(year - 1987 > year - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log('Value of X: ', x);
console.log('Value of Y: ', y);

const averageAge1 = ageJuan + ageGaby / 2;
console.log('Average age 1 # ageJuan + ageGaby / 2 #', ageJuan , ageGaby, averageAge1);

const averageAge2 = (ageJuan + ageGaby) / 2;
console.log('Average age 2 # (ageJuan + ageGaby) / 2 #', ageJuan , ageGaby, averageAge2);