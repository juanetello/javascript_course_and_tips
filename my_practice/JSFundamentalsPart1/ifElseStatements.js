
const age = 2;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Ismael can start driving 🚗');
} else {
    const yearLeft = 18 - age;
    console.log(`Ismael can't start driving 🚫🚗.
    He's too young. Wait another ${yearLeft} years.🙂`);
}
