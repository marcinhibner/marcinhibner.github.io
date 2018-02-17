"use strict";

var napis = "Akademia108";

function odwrocTekst(napis) {
  return napis.split('').reverse().join('');
}

console.log(odwrocTekst("Akademia108"));