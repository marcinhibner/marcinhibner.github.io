"use strict";

var tablica = [1, 2, 3, 4, 5, 6];

function sumaIloczyn(array) {
  var suma = 0;
  var iloczyn = 1;
  for (var i = 0; i < tablica.length; i++) {
    suma = suma + tablica[i];
    iloczyn = iloczyn * tablica[i];
  }
  console.log(suma);
  console.log(iloczyn);
}

sumaIloczyn(tablica);

// sumaIloczyn( [1, 2, 3, 4, 5, 6] );