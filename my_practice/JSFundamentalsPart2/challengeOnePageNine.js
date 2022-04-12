'use strict';

console.log(`JS Fundamentals Part 2 CHALLENGE`);

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

/* DATA 1 */
const avgDolphins = calcAverage(44 , 23 , 71);
// const avgDolphins = calcAverage(85, 54, 41);
console.log('Dolphins: ', avgDolphins);
const avgKoalas = calcAverage(65 , 54 , 49);
// const avgKoalas = calcAverage(23, 34, 27);
console.log('Koalas: ', avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`And the winner is 🏆🏆 Dolphins teams ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`And the winner is 🏆🏆 Koalas teams ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No team wins, Dolphins score ${avgDolphins} Koalas score ${avgKoalas}`);
    }

}

checkWinner(avgDolphins, avgKoalas);