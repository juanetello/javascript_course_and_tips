console.log('JavaScript Fundamentals – Part 1');
console.log('Coding Challenge #3');

// DATA 1
// const avgDolphins = ((96 + 108 + 89) / 3).toFixed(2);
// console.log(avgDolphins);
// const avgKoalas = ((88 + 91 + 110) / 3).toFixed(2);
// console.log(avgKoalas);

//  DATA 2
// const avgDolphins = ((97 + 112 + 101) / 3).toFixed(2);
// console.log('Dolphins: ', avgDolphins);
// const avgKoalas = ((109 + 95 + 123) / 3).toFixed(2);
// console.log('Koalas: ', avgKoalas);

// DATA 3
const avgDolphins = ((97 + 112 + 101) / 3).toFixed(2);
console.log('Dolphins: ', avgDolphins);
const avgKoalas = ((109 + 95 + 106) / 3).toFixed(2);
console.log('Koalas: ', avgKoalas);

// console.log('test 1', avgDolphins > avgKoalas && avgDolphins > 100);
// console.log('test 2', avgKoalas > avgDolphins && avgKoalas > 100);
// console.log('test 3', avgKoalas === avgDolphins && avgKoalas > 100 || avgDolphins > 100);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('The winner of the trophy 🏆 is the Dolphins team');
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log('The winner of the trophy 🏆 is the Koalas team');
} else if (avgKoalas === avgDolphins && avgKoalas >= 100 && avgDolphins >= 100){
    console.log("Today we don't have a winner 🤷🏽‍♂️");
}
