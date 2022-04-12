const billOne = 275;
const billTwo = 40;
const billThree = 430;
const normalTipPorcent = 15/100;
console.log('normalTipPorcent 15%',normalTipPorcent);
const unNormalTipPorcent = 20/100;
console.log('unnormalTipPorcent 20%', unNormalTipPorcent);

/* "NEW WAY"
    second intent */

const porcentTip = (billThree >= 50 && billThree <= 300) ? normalTipPorcent : unNormalTipPorcent;
console.log(`The bill porcentTip`, porcentTip);

const tip = billThree * porcentTip;
console.log(`The bill tip`, tip);

const totalToPay = billThree + tip// (billThree + tip).toFixed(2);
console.log(`The bill totalToPay`, totalToPay);

console.log(`The bill was ${billThree}, the tip was ${tip}, and the total value ${totalToPay}`); //${tip.toFixed(2)}


/* 
OLD WAY...
first intent
if (billOne >= 50 && billOne <= 300) {

    const tip = billOne * normalTipPorcent; 
    console.log('tip',tip);

    const total = (billOne + tip).toFixed(2);
    console.log('total', total);
    console.log(`The bill was ${billOne}, the tip was ${tip.toFixed(2)}, and the total value ${total}`);
} else {
    console.log('To pay you need to go out and order something');

    const tip = billOne * unNormalTipPorcent; 
    console.log('tip',tip);

    const total = (billOne + tip).toFixed(2);
    console.log('total', total);
    console.log(`The bill was ${billOne}, the tip was ${tip.toFixed(2)}, and the total value ${total}`);
} */





// // console.log(`The bill was ${billTwo}, the tip was 41.25, and the total value ${billTwo + ''}`);
// // console.log(`The bill was ${billThree}, the tip was 41.25, and the total value ${billThree + ''}`);