'use strict';

let baseStyles = [
    "color: #000000",
    "background-color: #00ff00",
    "padding: 1px 2px",
    "border-radius: 4px"
].join(";");

console.log('%c JS Fundamentals Part 2 ', baseStyles);

const juanArray = [
    'Juan',
    'Tello',
    2022 - 1987,
    'Developer',
    ['Jorge', 'Fausto', 'Negro', 'Dario']
];
console.log('Value array ', juanArray);

const juan = {
    firstName : 'Juan',
    lastName : 'Tello',
    age : 2022 - 1987,
    job : 'Developer',
    friends : ['Jorge', 'Fausto', 'Negro', 'Dario']
};
console.log('Value object ', juan);

console.log('Last Name',juan.lastName); //with . dot we use the real property name
console.log('Test [lastName ].', juan['lastName']); //with [] brackets we use something LIKE property name

const nameKey = 'Name';
console.log('Test [ last + nameKey].', juan['last' + nameKey]); //with [] brackets we use something LIKE property name

const interestedIn = prompt('What are you interested to know about Juan? You can choose between firstName ,lastName ,age ,job ,friends');
console.log(interestedIn);



// if (juan[interestedIn]) {
//     console.log(`The people wants know ... ${interestedIn}, of Juan: ${juan[interestedIn]}`);    
// } else {
//     console.log('Choose a correct option. You can choose between firstName ,lastName ,age ,job ,friends');    
// }

const peopleWantToKnow = `The people wants know ... ${interestedIn}, of Juan: ${juan[interestedIn]}`;
const anotherChanse = 'Choose a correct option. You can choose between firstName ,lastName ,age ,job ,friends';
const dataToShow = juan[interestedIn] ? peopleWantToKnow : anotherChanse;

console.log(dataToShow);

//TO ADD DATA to an object we can use the dot or the brackets.
console.log('Before add data: ', juan);
juan.location = 'Argentina';
juan['twitter'] = '@juanetello';
console.log('After add data: ', juan);