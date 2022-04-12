
const day = 'friday';
const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of week) {

    switch (day) {
        case 'monday': // day === 'monday'
            console.log('Here we');
            console.log('have three');
            console.log('logs for monday');
            break;
        case 'tuesday':
            console.log('tuesday study');
            break;
        case 'wednesday':
        case 'friday':
            console.log('Go to fisio');    
            break;
        case 'thursday':
            console.log('study to PROMO');    
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend ;)'); 
            break;
        default:
            console.log('choose a different day or go home!!');
            break;
    }

}

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Here we');
//         console.log('have three');
//         console.log('logs for monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday study');
//         break;
//     case 'wednesday':
//     case 'friday':
//         console.log('Go to fisio');    
//         break;
//     case 'thursday':
//         console.log('study to PROMO');    
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend ;)'); 
//         break;
//     default:
//         console.log('choose a different day or go home!!');
//         break;
// }

if (day === 'monday') {
        console.log('Here we');
        console.log('have three');
        console.log('logs for monday');
} else if (day === 'tuesday'){
    console.log('tuesday study');
} else if (day === 'wednesday' || day === 'friday'){
    console.log('Go to fisio');
} else if (day === 'thursday'){
    console.log('study to PROMO');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend ;)');
} else {
    console.log('choose a different day or go home!!');
}