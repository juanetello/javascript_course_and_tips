'use strict';

let baseStyles = [
    "color: #000000",
    "background-color: #00ff00",
    "padding: 1px 2px",
    "border-radius: 4px"
].join(";");

console.log('%c JS Fundamentals Part 2 ', baseStyles);

const brutoLastMonth = 135239.57;
console.log('brutoLastMonth',brutoLastMonth);
const substract = 17/100;
console.log('substract',substract);

console.log(brutoLastMonth * substract);
const netoLastMonth = brutoLastMonth - (brutoLastMonth * substract);
console.log(`%c netoLastMonth --> ${netoLastMonth}`, baseStyles);

// const increaseToday = 3.7/100;
// console.log('increaseToday',increaseToday);

// console.log('netoLastMonth * increaseToday',netoLastMonth * increaseToday);