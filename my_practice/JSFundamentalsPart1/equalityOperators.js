const age = 18;

if (age === 18) console.log('You just became an adult :D (strict)');

const age2 = '18';

if (age2 == 18) console.log('You just became an adult :D (loose)');

//simple way of getting a value from web page 
//to do that we use PROMPT

const favNumber = Number(prompt(`What's your favourite number? 🤔`));
console.log('Fav number : ' , favNumber);
console.log(typeof favNumber);

if (favNumber === 23) {
    alert('Your favourite number is 23!!');
} else if (favNumber === 7) {
    console.log('Your favourite number is 7');
} else if (favNumber >= 32) {
    console.log('Your favourite number is also a cool number!');
} else {
    console.log('Your favourite number is not 23');
}

if (favNumber !== 23) console.log('Why not 23? 🤔');