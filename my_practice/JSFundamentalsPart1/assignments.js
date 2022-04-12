console.log(new Date());

const country = 'Argentina';
const continent = 'South America';
let population = 4000000000;

console.log('My country is ' , country, 'is in ' , continent, 
' and the population is ' , population);

const isIsland = false;
let language;

console.log('Type of isIsland: ' ,typeof isIsland);
console.log('Type of population: ' ,typeof population);
console.log('Type of country: ' ,typeof country);
console.log('Type of language: ' ,typeof language);

language = 'Spanish';

console.log('Value of language is ' , language ,
 ' and type of' , typeof language);

population++;

let tanosPopulation = population /2;
console.log('New population is ' , tanosPopulation);

let finlandPopulation = 6000000000;

if (population > finlandPopulation) {
    console.log('Population of my country is ' , population, 'bigger than finland Population' , finlandPopulation);
} else{
    console.log('Population of my country is ' , population, 'lower than finland Population' , finlandPopulation);
}

let countryDescription = 'Argentina is in South America, and its 4 million people speak spanish';
console.log('value of countryDescription -->', countryDescription);

let newCountryDescription = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log('value of newCountryDescription -->', newCountryDescription);

console.log('Mi opinion 4 ---- valor real --> ','9' - '5');
console.log('Mi opinion 1617 ---- valor real --> ','19' - '13' + '17');
console.log('Mi opinion 23 ---- valor real --> ','19' - '13' + 17);
console.log('Mi opinion false ---- valor real --> ','123' < 57);
console.log('Mi opinion ---- valor real --> ',5 + 6 + '4' + 9 - 4 - 2);


console.log(`${country}'s population is 
             ${population > 33 ? 'above' :
             'below'} average`,);