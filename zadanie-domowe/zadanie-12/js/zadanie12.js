'use strict';

class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  }   
    opiszKsiazke() {
      if(this.przeczytana === true) {
        return 'Ksiazka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i zostala przeczytana';
        } else {
          return 'Ksiazka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i nie zostala przeczytana';
        }
    }
  }

var wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
var x = new Ksiazka('X', 'A', false);
var y = new Ksiazka('Y', 'B', false);

var tablica = [wiedzmin, x, y];

function iloscPrzeczytanych(array) {
  var przeczytane = 0;
  for(var i = 0; i < tablica.length; i++) {
    if (tablica[i].przeczytana === true) {
      przeczytane += tablica[i].przeczytana
      }
      console.log(tablica[i].opiszKsiazke());
     } 
  console.log('Ilosc przeczytanych ksiazek wynosi: ' + przeczytane);
  }
  iloscPrzeczytanych(tablica);
  
  