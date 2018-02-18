'use strict';

var wszystkieZgody = document.getElementById("wszystkie-zgody");
//console.log(wszystkieZgody);
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");
//console.log(wszystkieCheckboxy);


//zmienne do inputow
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
//zmienna submit
var wyslijBtn = document.getElementById("wyslij");
//zmienna do komunikatorow
var wiadomosc = document.getElementById("wiadomosc");
//funkcja zaznaczenie wszytskich checkboxow
function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
    
}

wszystkieZgody.onchange = stanCheckboxa;