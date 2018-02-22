'use strict';

function wpisanieNaEkran(n) {
  // document.getElementById("kalk").value += n;
  var rezultat = document.getElementById("kalk");
  rezultat.innerHTML += n;
}
  
function wynik() {
  var kalk = document.getElementById("kalk").innerHTML;
  document.getElementById("kalk").innerHTML = eval(kalk);
}

function czyszczenieEkranu() {
  document.getElementById("kalk").innerHTML = " ";
}