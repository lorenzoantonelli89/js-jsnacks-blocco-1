// generatore di nomi e cognomi casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby
// vuole generare una falsa lista di invitati

var names = ['Lorenzo', 'Alessandro', 'Martino', 'Gabriele', 'Nunzio'];
var lastnames = ['Antonelli', 'Scalvini', 'Venti', 'Alessi', 'Chiefa'];

var nameLng = names.length;
var lastnameLng = lastnames.length;

var fullnames = [];

for (var i = 0; i < 9; i++) {
  var nameRandom = names[Math.floor(Math.random() * nameLng)];
  var lastnameRandom = lastnames[Math.floor(Math.random() * lastnameLng)];
  fullnames.push(nameRandom + ' ' + lastnameRandom);
}

console.log(fullnames);
