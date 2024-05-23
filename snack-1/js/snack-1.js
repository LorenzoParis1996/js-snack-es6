const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const tableName = 'Tavolo Vip';

console.log(guests);



const guestsList = guests.map((guestname, index) => {
    return {
        table: tableName,
        name: guestname,
        place: index++
    }
});

console.log(guestsList);