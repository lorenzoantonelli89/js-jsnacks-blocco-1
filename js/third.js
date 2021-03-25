var tableWrapper = document.getElementById('content-table');
var table;
var students = [];

function es1() {

    var student = {
        'name': 'Lorenzo',
        'surname': 'Antonelli',
        'age': 32
    }

    students.push(student);

    tableWrapper.innerHTML = ("<table id='table'><tr><th>Nome</th><th>Cognome</th><th>Età</th><th></th></tr></table> ");

    table = document.getElementById('table');

    for(var i = 0; i < students.length; i++){

        table.innerHTML += ('<tr><td>' + students[i]['name'] + '</td><td>' + students[i]['surname'] + '</td><td>' + students[i]['age'] + '</td><td><i class="fas fa-times"></i></td></tr>');
    }
}

function printTr(obj) {
    table.innerHTML += ('<tr><td>' + obj['name'] + '</td><td>' + obj['surname'] + '</td><td>' + obj['age'] + '</td><td><i class="fas fa-times"></i></td></tr>');
}

function resetForm() {
    
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('age').value = '';
}

function es3() {

    var btn = document.getElementById('submit');

    btn.addEventListener('click', function (event) {

        var name = document.getElementById('fname').value;
        var surname = document.getElementById('lname').value;
        var age = parseInt(document.getElementById('age').value);
        
        event.preventDefault();

        var student = {
            name,
            surname,
            age 
        }

        students.push(student);

        
        printTr(student);
        resetForm();
        
    });
}


function init() {
    es1();
    es3();
}

init();