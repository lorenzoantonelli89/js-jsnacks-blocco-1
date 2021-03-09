// generatore di nomi e cognomi casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby
// vuole generare una falsa lista di invitati

// var names = ['Lorenzo', 'Alessandro', 'Martino', 'Gabriele', 'Nunzio'];
// var lastnames = ['Antonelli', 'Scalvini', 'Venti', 'Alessi', 'Chiefa'];
//
// var nameLng = names.length;
// var lastnameLng = lastnames.length;
//
// var fullnames = [];
//
// for (var i = 0; i < 9; i++) {
//   var nameRandom = names[Math.floor(Math.random() * nameLng)];
//   var lastnameRandom = lastnames[Math.floor(Math.random() * lastnameLng)];
//   fullnames.push(nameRandom + ' ' + lastnameRandom);
// }
//
// console.log(fullnames);

// Crea 2 array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a
// quando ne avrà tanti quanti l'altro.


var arr1 = [15, 2, 8, 10, 21];
var arr2 = [5, 6];

var arr1Lng = arr1.length;
var arr2Lng = arr2.length;

if (arr1Lng === arr2Lng) {
  console.log('sono gia uguali');
  var shortArr = arr2;
  var longArr = arr1;
}else if (arr1Lng > arr2Lng) {
  var shortArr = arr2;
  var longArr = arr1;
}else {
  var shortArr = arr1;
  var longArr = arr2;
}

var elemMancanti = longArr.length - shortArr.length;

for (var i = 0; i < elemMancanti; i++) {
  var elemRnd = Math.floor(Math.random() * 100) + 1;
  shortArr.push(elemRnd);
}

console.log(shortArr, longArr);
