'use strict';

class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  }   
    opiszKsiazke() {
      if(this.przeczytana === true) {
        console.log('Ksiazka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i zostala przeczytana');
        } else {
          console.log('Ksiazka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i nie zostala przeczytana');
        }
    }
  }

var Wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
var X = new Ksiazka('X', 'A', false);
var Y = new Ksiazka('Y', 'B', false);

var tablica = [Wiedzmin, X, Y];

function iloscPrzeczytanych(tablica) {
  var przeczytane = 0;
  for(var i = 0; i < tablica.length; i++) {
    if (tablica[i].przeczytana === true) {
      przeczytane += tablica[i].przeczytana
      console.log(tablica[i].opiszKsiazke()); 
      } else {
        console.log(tablica[i].opiszKsiazke());
      }
     } 
  console.log('Ilosc przeczytanych ksiazek wynosi: ' + przeczytane);
  }
  iloscPrzeczytanych(tablica);
  