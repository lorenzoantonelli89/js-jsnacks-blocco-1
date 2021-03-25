var students = [];

function es1() {

    var student = {
        'name': 'Lorenzo',
        'surname': 'Antonelli',
        'eta': 32
    }

    students.push(student);
    // console.log(students[0]['name']);

//     console.log('ESERCIZIO 1');
//     console.log(' ');

//     for (var key in student)

//         console.log(student[key]);

}

function es3() {

    var btn = document.getElementById('submit');

    btn.addEventListener('click', function (event) {

        var fnameValue = document.getElementById('fname').value;
        var lnameValue = document.getElementById('lname').value;
        var etaValue = document.getElementById('eta').value;
        
        event.preventDefault();


        
        console.log(fnameValue);
        console.log(lnameValue);
        console.log(etaValue);
    });

    

    // console.log(' ');
    // console.log('ESERCIZIO 3');

    // for (var i = 0; i < students.length; i++) {

    //     console.log(' ');
    //     console.log('Name: ' + students[i]['name']);
    //     console.log('Surname: ' + students[i]['surname']);
    //     console.log('Età: ' + students[i]['eta']);

    // }


}


function init() {
    // es1();
    // es3();
}

init();