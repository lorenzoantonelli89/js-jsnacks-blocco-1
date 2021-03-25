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

    tableWrapper.innerHTML = ("<table id='table'><tr><th>Nome</th><th>Cognome</th><th>Età</th><th>REMOVE</th></tr></table> ");

    table = document.getElementById('table');

    for(var i = 0; i < students.length; i++){

        printTr(students[i]);

    }
}

function printTr(obj) {
    
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdSurname = document.createElement('td');
    var tdAge = document.createElement('td');
    var tdCross = document.createElement('td');
    tdName.innerHTML = obj['name'];
    tdSurname.innerHTML = obj['surname'];
    tdAge.innerHTML = obj['age'];
    tdCross.innerHTML = '<i class="fas fa-times"></i>';
    tdCross.dataset.index = students.indexOf(obj);
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdAge);
    tr.appendChild(tdCross);
    table.appendChild(tr);

    tdCross.addEventListener('click', function () {
        this.parentElement.remove();
        students.splice(this.dataset.index, 1);
    });
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