
function es1() {
    
    var student = {
        'name' : 'Lorenzo',
        'surname' : 'Antonelli',
        'eta' : 32
    }

    for(var key in student)

    console.log(student[key]);

}

function es2() {
    
    var students = [
        { 'name' : 'Lorenzo', 'surname' : 'Antonelli' },
          
        { 'name': 'Martino', 'surname': 'Scalvini' },

        { 'name': 'Alessandro', 'surname': 'Venti' }
    ]

    for(var i = 0; i < students.length; i++){

        console.log('Name: ' + students[i]['name']);
        console.log('Surname: ' + students[i]['surname']);
    }

}

function es3() {
    var nameValue = prompt('scrivi un nome');
    var surnameValue = prompt('scrivi un cognome');
    var etaValue = parseInt(prompt("scrivi l'età"));

    var student = {
        'name': ['Lorenzo', 'Martino', 'Alessandro', 'Vladus', 'Gabriele', 'Tiziana', nameValue],
        'surname': ['Antonelli', 'Scalvini', 'Venti', 'Matrioska', 'Alessi', 'Baldi', surnameValue],
        'eta': [32, 25, 29, 28, 31, 25, etaValue]
    }

    console.log(student['name']);
    console.log(student['surname']);
    console.log(student['eta']);

}

function es3Var() {
    var nameValue = prompt('scrivi un nome');
    var surnameValue = prompt('scrivi un cognome');
    var etaValue = parseInt(prompt("scrivi l'età"));

    var student = {
        'name' : nameValue,
        'surname' : surnameValue,
        'eta' : etaValue
    }

    console.log('Il nome è: ' + student['name']);
    console.log('Il cognome è: ' + student['surname']);
    console.log('La sua età è: ' + student['eta']);

}


function init() {
    es1();
    es2();
    es3();
    es3Var();

}

init();
