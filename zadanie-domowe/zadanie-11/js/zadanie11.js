'use strict';


var jsonPracownicy = {
    "pracownicy" : [
      {
        imie : "Krystian", 
        nazwisko : "Dziopa",
      },
      
       {
        imie : "Anna", 
        nazwisko : "Szapiel",
      },
      
       {
        imie : "Piotr", 
        nazwisko : "Żmuda",
       }
        ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function( element, index ) {
    console.log( "Pracownik o indexie: " + index + " to " + element.imie + " " + element.nazwisko );
} );