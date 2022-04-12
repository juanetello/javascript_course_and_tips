/* BASIC BOOLEAN LOGICA: THE "AND", "OR" & "NOT" OPERATORS. */

//EXAMPLE:
//A: Sarah has a driver's license.
//B: Sarah has good vision.

/* A AND B  */
// "Sarah has a driver's license, AND good vision"

/* TRUE when ALL are TRUE  (NO matter how many variables are defined) */

            // A
    /*AND   |TRUE   |FALSE */ 
//B /*TRUE  |TRUE   |FALSE */
    /*FALSE |FALSE  |FALSE */


/* A OR B  */
// "Sarah has a driver's license, OR good vision"

/* TRUE when ONE is TRUE */

            // A
    /*OR    |TRUE   |FALSE */ 
//B /*TRUE  |TRUE   |TRUE  */
    /*FALSE |TRUE   |FALSE */    


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

if (hasDriverLicense && hasGoodVision) {
    alert('Sarah is able to drive!! ;)')
} else {
    console.log('Someone else should drive... :(');
}


const hasDriverLicense1 = true; // A
const hasGoodVision1 = false; // B

console.log(hasDriverLicense1 && hasGoodVision1); // false
console.log(hasDriverLicense1 || hasGoodVision1); // true
console.log(!hasGoodVision1); // true