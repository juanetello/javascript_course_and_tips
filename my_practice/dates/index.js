const format = require('date-fns/format');
const formatDistance = require('date-fns/formatDistance');
const subDays = require('date-fns/subDays');
const subMonths = require('date-fns/subMonths');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const esp = require('date-fns/locale/es');

const today = new Date();
console.log('La fecha de hoy generada es ', today);

const formatToday = format(today, 'dd/MM/yyyy');
console.log('La fecha formateada es ', formatToday);

console.log(format(today, "'Hoy día es ' eeee "));

const bornIsma = formatDistance(new Date(2020, 2, 11), today);
const bornJuan = formatDistance(new Date(1987, 10, 18), today);
const bornGaby = formatDistance(new Date(1988, 10, 5), today);

console.log('Nacimiento Isma', bornIsma);
console.log('Nacimiento Gaby', bornGaby);
console.log('Nacimiento Juan', bornJuan);

const filters = [
    { 
        label: 'Ultimos 3 dias',
        startDate: format(subDays(today, 3),'dd-MM-yyyy'),
        endDate: formatToday
    },
    { 
        label: 'Ultimos 7 dias',
        startDate: format(subDays(today, 7),'dd-MM-yyyy'),
        endDate: formatToday
    },
    { 
        label: 'Ultimos 25 dias',
        startDate: format(subDays(today, 25),'dd-MM-yyyy'),
        endDate: formatToday
    },
    { 
        label: 'Ultimos 90 dias',
        startDate: format(subDays(today, 90),'dd-MM-yyyy'),
        endDate: formatToday
    },
    { 
        label: 'Ultimos 180 dias',
        startDate: format(subDays(today, 180),'dd-MM-yyyy'),
        endDate: formatToday
    },
    { 
        label: 'Ultimos 365 dias',
        startDate: format(subDays(today, 365),'dd-MM-yyyy'),
        endDate: formatToday
    }

];


for (let index = 1; index <= 3; index++) {
    const months = subMonths(today, index);
    filters.push({
        label: format(months, 'MMMM', {locale: esp}),
        startDate: format(startOfMonth(months), 'dd-MM-yyyy'),
        endDate: format(endOfMonth(months), 'dd-MM-yyyy'),
    });
}

console.log('Los filtros son --> ', filters);