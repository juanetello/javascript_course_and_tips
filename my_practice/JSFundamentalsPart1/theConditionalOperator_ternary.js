const age = 34;

// example use
// age >= 18 ? console.log('You are able to drink wine 🍷') : console.log('You are not allowed to drink wine 🍷 😢');

const drink = age >= 18 ? 'wine 🍷' : 'water 🥛';

console.log('(ternary) You are allowed to drink', drink);


let drink2;

if (age >= 18) {
    drink2 ='wine 🍷';
} else {
    drink2 = 'water 🥛';
}

console.log('(If statements) You are allowed to drink', drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`);