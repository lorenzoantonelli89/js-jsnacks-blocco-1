var tableWrapper = document.getElementById('content-table');
var table;
var students = [];
var student;

function es1() {

    var student = {
        'name': 'Lorenzo',
        'surname': 'Antonelli',
        'age': 32
    }

    students.push(student);

    tableWrapper.innerHTML = ("<table id='table'><tr><th id='nameorder'>Nome</th><th id='surnameorder'>Cognome</th><th id='ageorder'>Età</th><th>REMOVE</th></tr></table> ");

    table = document.getElementById('table');

    for(var i = 0; i < students.length; i++){
        printTr(students[i]);
    }
}

function printTr(obj) {
    
    var tr = document.createElement('tr');
    tr.classList.add('remove');
    var tdName = document.createElement('td');
    var tdSurname = document.createElement('td');
    var tdAge = document.createElement('td');
    var tdDelete = document.createElement('td');
    tdName.innerHTML = obj['name'];
    tdSurname.innerHTML = obj['surname'];
    tdAge.innerHTML = obj['age'];
    tdDelete.innerHTML = '<i class="fas fa-user-slash"></i>';
    tdDelete.dataset.index = students.indexOf(obj);
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdAge);
    tr.appendChild(tdDelete);
    table.appendChild(tr);

    tdDelete.addEventListener('click', function () {
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
        name = name.charAt(0).toUpperCase() + name.slice(1);
        var surname = document.getElementById('lname').value;
        surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        var age = parseInt(document.getElementById('age').value);

        event.preventDefault();

        student = {
            name,
            surname,
            age 
        }

        students.push(student);

        printTr(student);
        resetForm();
    });
}

function printOrder() {
    var trRem = document.querySelectorAll('#table .remove');

    for (var i = 0; i < students.length; i++) {
        trRem[i].remove();
        printTr(students[i]);
    }
}

function itemsOrder(str) {
    students.sort(function (a, b){
        var A = a[str];
        var B = b[str];
        if (A < B) {
            return -1;
        } else if (A > B) {
            return 1;
        }
        return 0;
    });
    printOrder();
}

function order() {
    
    var nameOrder = document.getElementById('nameorder');

    nameOrder.addEventListener('click', function () {
        itemsOrder('name');
    });

    var surnameOrder = document.getElementById('surnameorder');

    surnameOrder.addEventListener('click', function () {
        itemsOrder('surname');
    });

    var ageOrder = document.getElementById('ageorder');

    ageOrder.addEventListener('click', function () {
        itemsOrder('age');
    });
}


function init() {
    es1();
    es3();
    order();
}

init();