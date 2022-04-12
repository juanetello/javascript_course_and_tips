console.log(' THE 7 PRIMITIVE DATA TYPES IN JAVASCRIPT');

console.log('Number: Floating point numbers used for decimals and integes. Example');
let age = 34;
console.log('AGE value', age, ' and type ', typeof age);

console.log('String: Sequence of characters, used for text. Example');
let firstName = 'Juan';
console.log('firstName value', firstName, ' and type ', typeof firstName);

console.log('Boolean: Logical type that can only be TRUE or FALSE, Used to taking decisions. Example');
let legalAge = true;
console.log('legalAge value', legalAge, ' and type ', typeof legalAge);

console.log('Undefined: Value taken by a variable that is not defined("empty value"). Example');
let child;
console.log('child value', child, ' and type ', typeof child);

console.log('Null: Also means "empty value"');
console.log('Type null', typeof null);

console.log('Symbol (ES2015): Value that is unique and cannot be changed.');

console.log('BigInt (ES2020): Larger integers than the Number type can hold. Example');
// let intBiger = new BigInt();
// console.log('intBiger value', intBiger, ' and type ', typeof intBiger);

console.log(`
NOTE: 
    JAVASCRIPT: Has dynamic typing, we do NOT have to manually define the data type 
                of the value stored in a variable (value has type, NOT variable!). 
                Insted, data type are determined AUTOMATICALLY.`);