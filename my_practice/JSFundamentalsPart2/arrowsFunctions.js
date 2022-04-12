'use strict';

console.log(`JS Fundamentals Part 2`);

// Function expression
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

// Arrow function
/* simple form with one param */
const calcAge2 = birthYear => 2021 - birthYear;
const ageJuan = calcAge2(1987);
console.log(ageJuan);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, 'Juan'));
console.log(yearsUntilRetirement(1952, 'Juanita'));