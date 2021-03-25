// crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuno varietà
// peso e lunghezza calcola quanto pesano tutte le zucchine

    // var zucchine = [
    //     { 'varietà': 'tonda', 'peso': 1, 'lunghezza': 10 },
    //     { 'varietà': 'tonda', 'peso': 5, 'lunghezza': 15 },
    //     { 'varietà': 'tonda', 'peso': 21, 'lunghezza': 13 },
    //     { 'varietà': 'tonda', 'peso': 11, 'lunghezza': 7 },
    //     { 'varietà': 'tonda', 'peso': 37, 'lunghezza': 11 },
    //     { 'varietà': 'tonda', 'peso': 51, 'lunghezza': 27 },
    //     { 'varietà': 'tonda', 'peso': 22, 'lunghezza': 24 },
    //     { 'varietà': 'tonda', 'peso': 123, 'lunghezza': 22 },
    //     { 'varietà': 'tonda', 'peso': 344, 'lunghezza': 30 },
    //     { 'varietà': 'tonda', 'peso': 321, 'lunghezza': 31 },
    // ];

    // var total = 0;

    // for(i = 0; i < zucchine.length; i++){

    //     total += zucchine[i]['peso'];
    //     console.log(zucchine[i]['peso']);


    // }

    //     console.log('Il peso totale è :' + total);

// Crea 10 oggetti che rappresentano una zucchina.
//   Dividi in due array separati le zucchine che misurano
//   meno o più di 15cm.
//   Infine stampa separatamente quanto pesano i due gruppi
//   di zucchine

    // var zucchinePiccole = [];
    // var zucchineGrandi = [];

    // var zucchine = [
    //     { 'varietà': 'tonda', 'peso': 1, 'lunghezza': 10 },
    //     { 'varietà': 'tonda', 'peso': 5, 'lunghezza': 15 },
    //     { 'varietà': 'tonda', 'peso': 21, 'lunghezza': 13 },
    //     { 'varietà': 'tonda', 'peso': 11, 'lunghezza': 7 },
    //     { 'varietà': 'tonda', 'peso': 37, 'lunghezza': 11 },
    //     { 'varietà': 'tonda', 'peso': 51, 'lunghezza': 27 },
    //     { 'varietà': 'tonda', 'peso': 22, 'lunghezza': 24 },
    //     { 'varietà': 'tonda', 'peso': 123, 'lunghezza': 22 },
    //     { 'varietà': 'tonda', 'peso': 344, 'lunghezza': 30 },
    //     { 'varietà': 'tonda', 'peso': 321, 'lunghezza': 31 },
    //   ];

    //     var pesoPiccole = 0;
    //     var pesoGrandi = 0;

    //     for(var key in zucchine)


    //     if (zucchine[key]['lunghezza'] < 15) {
    //       zucchinePiccole.push(zucchine[key]);
    //     }else{
    //       zucchineGrandi.push(zucchine[key]);
    //     }

    //     for(var i = 0; i < zucchinePiccole.length; i++){

    //       pesoPiccole += zucchinePiccole[i]['peso'];
    //     };

    //     for (var i = 0; i < zucchineGrandi.length; i++) {

    //         pesoGrandi += zucchineGrandi[i]['peso'];
    //     };




    //     console.log('Il peso delle zucchine piccole : ' + pesoPiccole);
    //     console.log('Il peso delle zucchine grandi : ' + pesoGrandi);

 // usare 2 funzioni al posto di fare 2 cicli usando come value la var per far ciclare il for dentro la fun

    // function getPesoSum(zucchine){

    //     var peso = 0;


    // for (var i = 0; i < zucchine.length; i++) {

    //     peso += zucchine[i]['peso'];

    //     return peso;
    // };
    // }


// scrivi una funzione che accetti una stringa come argomento a la ritorni girata


    // function revString(str) {

    // var splString = str.split("");

    // var revStr = splString.reverse();

    // return revStr.join("");
    // }

    // var result = revString('martino');

    // console.log('Il nome martino al contrario è : ' + result);

// Scrivi una funzione che fonda due array(aventi lo stesso
// numero di elementi) prendendo alternativamente gli
//   elementi da uno e dall'altro
//   es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].

    // function concat(){
    // var lettere = ['a', 'b', 'c'];
    // var number = [1, 2, 3];
    // var uniti = [];

    // for (var i = 0; i < lettere.length; i++) {
    //     uniti.push(lettere[i], number[i]);
    // }

    // console.log(uniti);
    // }

    // concat();

// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"


    function splitter(min, max, array) {

    var resultArr = [];

    for(var i = min; i <= max; i++){

        resultArr.push(array[i]);

    }

    return console.log(resultArr);
    }


    function esArraySplitter() {

    var arr = [1, 2, 3, 10, 12, 13, 7, 8, 9];
    var indMin = 3;
    var indMax = 7;

    var splitted = splitter(indMin, indMax, arr);

    console.log(arr);

    }

    esArraySplitter();