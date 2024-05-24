const biciclette = [
    {
        nome: 'olimpo',
        peso: 50
    },
    {
        nome: 'atena',
        peso: 40
    },
    {
        nome: 'zeus',
        peso: 75
    },
    {
        nome: 'ade',
        peso: 65
    },
    {
        nome: 'ercole',
        peso: 25
    },
    {
        nome: 'ulisse',
        peso: 30
    },
    {
        nome: 'andromeda',
        peso: 35
    },
    {
        nome: 'kratos',
        peso: 70
    },
    {
        nome: 'ares',
        peso: 100
    },
    {
        nome: 'poseidone',
        peso: 80
    }
];

console.log(biciclette);

let pesoLight = biciclette[0].peso;
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < pesoLight) {
        pesoLight = biciclette[i].peso;
    }
};

const biciLight = biciclette.filter((element) => {
    if (element.peso === pesoLight) {
        return true
    }
});

const { nome, peso } = biciLight[0];

console.log(`modello bici:${nome},peso modello:${peso}kg`);
