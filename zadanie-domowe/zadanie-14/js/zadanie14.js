'use strict';

function kalkulkator() {
var x = 5;
var y = 10;
var a = eval("x * y") + "<br>";
var b = eval("x / y") + "<br>";
var c = eval("x + y") + "<br>";
var d = eval("x - y") + "<br>";

var rezultat = a + b + c + d;
  
    document.getElementById("kalk").innerHTML = rezultat;
}