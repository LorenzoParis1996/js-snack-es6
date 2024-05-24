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

const biciLight = biciclette[4];

const { nome, peso } = biciLight;
console.log(`${biciLight.nome}, ${biciLight.peso}`);