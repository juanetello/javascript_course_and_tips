console.log('OPERATORS');

// Math operators
const year = 2021;
const ageJuan = year - 1987;
const ageGaby = year - 1988;
console.log('age Juan', ageJuan, ' and gaby\'s age ', ageGaby);

console.log('Juan age *2: ', ageJuan * 2);
console.log('Juan age / 10: ', ageJuan / 10);
console.log(2 ** 3 , '2 ** 3 means 2 to the power of 3 = 2 * 2 * ');

const firstName = 'Juan';
const lastName = 'Tello'

console.log('Welcome ' + firstName + ' ' +  lastName);

// Assignment operators
let x = 10 + 5;
console.log('X value: ', x);

x += 10; // x = x + 10
console.log('X value: ', x);

x *= 10; // x = x * 10
console.log('X value: ', x);

x ++;
console.log('X value: ', x);

x --;
console.log('X value: ', x);

// Comparison operators
console.log(ageJuan > ageGaby); // >, <, <=, >=
console.log('Gaby has legal age? ' , ageGaby >= 18);