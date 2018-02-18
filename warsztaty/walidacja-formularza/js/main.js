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



function walidujFormularz(event) {
    if (inputImie.value == "") {
//        console.log("Dziala");
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz imie";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
}
    
    if (inputEmail.value == "") {
//        console.log("Dziala");
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "Wpisz email!";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();    
    }

   if (!zgodaMarketingowa1.checked) {
        var msgZgoda = document.createElement("li");
        msgZgoda.innerHTML = "Musisz wyrazic zgode!";
        wiadomosc.appendChild(msgZgoda);
        event.preventDefault();
}
}


//wyslijBtn.addEventListener("click", walidujFormularz);  lub
wyslijBtn.onclick = walidujFormularz;




