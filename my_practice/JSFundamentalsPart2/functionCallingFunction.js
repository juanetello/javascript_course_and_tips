'use strict';

console.log(`JS Fundamentals Part 2`);

/* 1st intent */
// function cutFruitsPieces(fruits){ 
    // return fruits * 4;
// }

/* 2nd intent */
const cutFruitsPieces = (fruits) => fruits * 4;

/* 1st intent */
// function fruitsProcessor(apples, oranges){
//     const applePieces = cutFruitsPieces(apples);
//     const orangePieces = cutFruitsPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

//     return juice;
// }


/* 2nd intent */
const fruitsProcessor = (apples,oranges) =>{
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

    return juice;
}


console.log(fruitsProcessor(2,5));