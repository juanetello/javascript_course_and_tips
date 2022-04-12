'use strict';

let baseStyles = [
    "color: #fff",
    "background-color: #444",
    "padding: 2px 4px",
    "border-radius: 2px"
].join(";");

console.log('%c JS Fundamentals Part 2 ', baseStyles);

const friendsList = ['Fausto', 'Jorge', 'Dario', 'Mauro'];
console.log('Original Friends List ', friendsList);

console.log('%c With PUSH we add values to an array of friends at the end of this.', baseStyles);
friendsList.push('Eugenio');
console.log('New Friends List ', friendsList);

console.log('%c With UNSHIFT we add values to an array of friends to the beginning of this.', baseStyles);
friendsList.unshift('Negro');
console.log('New Friends List 2 ', friendsList);

console.log('%c With POP we remove values of an array of friends at the end of this.', baseStyles);
friendsList.pop();
console.log('New Friends List 3 ', friendsList);

console.log('%c With SHIFT we remove values of an array of friends to the beginning of this.', baseStyles);
friendsList.shift();
console.log('New Friends List 4 ', friendsList);

console.log('%c With PUSH we add values to an array of friends at the end of this.', baseStyles);
friendsList.push('Eugenio');
console.log('New Friends List ', friendsList);

console.log('%c With INDEXOF we could know where the element of arg is located.', baseStyles);
console.log('Friends List indexof', friendsList.indexOf('Jorge'));
console.log('%c With INDEXOF we could search an existing element or not for example Bob, we recive -1', baseStyles);
console.log('Friends List indexof', friendsList.indexOf('Bob'));

console.log('%c With INCLUDES we could know IF the element of arg is located for example Jorge, we recive true.', baseStyles);
console.log('Friends List indexof', friendsList.includes('Jorge'));
console.log('%c With INCLUDES we could sknow IF the element of arg is located for example Bob, we recive false.', baseStyles);
console.log('Friends List indexof', friendsList.includes('Bob'));


/* console.log('Example github....');

const person = (firstName, lastName, email = '', year) => {
    this.firstName = firstName;
    this.age = 2022 - year;
    this.email = email;
    this.lastName = lastName;

    const people = {
        firstName,
        lastName,
        email,
        age
    }

    return people;
}

const object = person('Juan', 'Tello', 'jestebantello@gmail.com', 1987);
console.log('Valor ', object);
const object2 = person('Gaby', 'Pepi', 'gabrielapepi@gmail.com', 1988);
console.log('Valor ', object2);
const object3 = person('Isma', 'Tello Pepi', '',  2020);
console.log('Valor ', object3); */