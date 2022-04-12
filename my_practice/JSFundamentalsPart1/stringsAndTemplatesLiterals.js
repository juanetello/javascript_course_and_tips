// ``

const firstName = 'Juan';
const birthYear = 1987;
const job = 'Developer';
const year = 2021;

const juan = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + '!';
console.log('Hi ' ,juan);

const refactorJuan = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log('Hi there' ,refactorJuan);

//Before JSON
console.log('String with \n\
multiple \n\
lines');

//EMCS 6
console.log(`String with
multiple
lines 🐖`);