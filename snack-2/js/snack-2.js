const students = [
    {
        Id: 213,
        Name: 'Giuseppina della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello ',
        Grades: 68
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84
    }
];

console.log(students);

for (let key in students) {
    console.log(students[key]['Name'].toUpperCase());
}

const onlyGrades = students.filter((seventy) => {
    if (seventy.Grades > 70) {
        return true
    }

});

console.log(onlyGrades);

const bothGradesAndId = [];

for (let index = 0; index < students.length; index++) {
    const element = students[index];
    if ((element.Grades > 70) && (element.Id > 120)) {
        bothGradesAndId.push(element);
    }

}

console.log(bothGradesAndId);