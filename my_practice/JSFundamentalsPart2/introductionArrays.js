'use strict';

console.log(`JS Fundamentals Part 2`);

const friend1 = 'Fausto';
const friend2 = 'Dario';
const friend3 = 'Mauro';
console.log('Friends: ' + friend1 + ' ' + friend2 + ' ' + friend3);

const friendList = ['Fausto', 'Dario', 'Mauro'];
console.log('Friend list: ' , friendList);

console.log(friendList[0]);
console.log('[2] square syntax',friendList[2]);

console.log(' .length property of arrays to know how many #things# the array have ',friendList.length);
console.log('To know the last value from an array we can use friendList[friendList.length - 1] ', friendList[friendList.length - 1]);

friendList[2] = 'Jorge';
console.log(friendList);

/* We can't do this, to asign a value to an array */
// friendList = ['Carlos', 'Julian'] --> Uncaught TypeError: Assignment to constant variable.

/* An array an hold differents type of values */
const firstName = 'Juan';
const juan = [firstName, 'Tello', 2021 - 1987, friendList, 'Node JS Developer'];
console.log(juan);
console.log(juan.length);


/* Exercise */

const calcAge = (birthYear) => 2022 - birthYear;

const yearsList = new Array(1987,1988,1959,2020,1578);
console.log('yearsList', yearsList);

console.log(calcAge(yearsList)); // --> NaN, because of, the arg we pass are an array, and the function wait for a year
console.log(calcAge(yearsList[2]));
console.log(calcAge(yearsList[3]));
console.log(calcAge(yearsList[friendList.length - 1]));

const ageList = [calcAge(yearsList[0]),calcAge(yearsList[1]),calcAge(yearsList[2]),calcAge(yearsList[3]),calcAge(yearsList[4])];
console.log('ageList', ageList);


/* TODO improve this function*/
// const calcAgeFromArray = (birthYearList) => {
//     console.log('birthYearList', birthYearList);

//     for (const year in birthYearList) {
//         console.log('year',year);
//         const result = 2022 - year;
//         console.log('result',result);
//         return result;
//     }

    
// } 

// console.log(calcAgeFromArray(yearsList));