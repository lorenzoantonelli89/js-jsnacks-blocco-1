var tableWrapper = document.getElementById('content-table');
var table;
var students = [];
var student;
// funzione stampa iniziale table e primo studente 
function printTable() {

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
// funzione per stampare ad ogni click del form lo studente in tabella
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
// funzione per resettare il form dopo submit
function resetForm() {
    
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('age').value = '';
}
// funzione click del submit
function clickSubmit() {

    var btn = document.getElementById('submit');

    btn.addEventListener('click', function (event) {

        var name = document.getElementById('fname').value;
        name = name.charAt(0).toUpperCase() + name.slice(1); //mette grande la prima lettera e aggiunge il resto della str
        var surname = document.getElementById('lname').value;
        surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        var age = parseInt(document.getElementById('age').value);
        var nameReturn = document.getElementById('fname');

        event.preventDefault(); // ferma il refresh della pagina dopo invio del form

        student = {
            name,
            surname,
            age 
        }
        students.push(student);
        printTr(student);
        resetForm();
        nameReturn.focus(); // funzione per far ritornare a inserimento name dopo invio dati
    });
}
// funzione elimina le vecchie tr e stampa le nuove con nomi ordinati
function printOrder() {
    var trRem = document.querySelectorAll('#table .remove');

    for (var i = 0; i < students.length; i++) {
        trRem[i].remove();
        printTr(students[i]);
    }
}
// funzione per ordinare oggetti dentro array
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
// funziona che ordina gli studenti in base al click delle th
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
    printTable();
    clickSubmit();
    order();
}

init();