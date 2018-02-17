'use strict';

function sumaKwadratow (tablica) {
  var sK = 0;
  for (var i = 0; i < tablica.length; i++) {
    sK += Math.pow(tablica[i],2);
}
 return sK;
}

var rezultat = sumaKwadratow( [0,1,2,3,4,5] );
console.log(rezultat);