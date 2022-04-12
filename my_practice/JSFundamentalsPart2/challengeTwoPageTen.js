'use strict';

let baseStyles = [
    "color: #fff",
    "background-color: #444",
    "padding: 2px 4px",
    "border-radius: 2px"
].join(";");

console.log('%c JS Fundamentals Part 2 CHALLENGE', baseStyles);

const billAmountList = [100,125,555,44];
const normalTipPorcent = 15/100;
const unNormalTipPorcent = 20/100;

const calcTip = (amountList) => {

    let totalList = [];
    let tipList = [];
    for (const bill of amountList) {

        const porcentTip = (bill >= 50 && bill <= 300) ? normalTipPorcent : unNormalTipPorcent;
        // console.log(`The bill porcentTip`, porcentTip);
        const tip = bill * porcentTip;
        tipList.push(tip);
        // console.log(`The bill tip`, tip);
        const totalToPay = bill + tip;
        // console.log(`The bill totalToPay`, totalToPay);

        console.log(`%c The bill was ${bill}, the tip was ${tip}, and the total value ${totalToPay}`, baseStyles);

        totalList.push(totalToPay);
    }

    console.log('tipList -->', tipList);
    console.log('totalList -->', totalList);
}

calcTip(billAmountList);