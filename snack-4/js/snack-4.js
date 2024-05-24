const squadre = [
    {
        nome: 'rossi',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'verdi',
        puntiFatti: 0,
        fallisSubiti: 0
    },
    {
        nome: 'blu',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'gialli',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


const puntiFalli = squadre.map((element) => {
    return {
        nome: element.nome,
        puntiFatti: Math.floor(Math.random() * 100) + 1,
        falliSubiti: Math.floor(Math.random() * 20) + 1
    }
});

console.log(puntiFalli);

nomiFalli = puntiFalli.map((element) => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti
    }
});

console.log(nomiFalli);




