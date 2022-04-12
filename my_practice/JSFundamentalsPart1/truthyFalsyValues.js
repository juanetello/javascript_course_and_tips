/* We have 5 FALSY values: 0, '', undefined, null, NaN */

console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Juan')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;

if (money) {
    console.log('Do not spend it all 🙂');
} else {
    console.log('You should get a job!');
}