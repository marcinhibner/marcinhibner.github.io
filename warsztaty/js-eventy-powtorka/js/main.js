'use strict';

window.addEventListener('scroll', function() {
    console.log('123');
    
    var y = window.pageYOffset;
    var headerHeight =document.getElementById('main-header').offsetHeight;
    
   if(y >= headerHeight) {
       document.getElementById('main-header').style.backgroundColor = 'yellow'
   }
});


window.addEventListener('scroll', function() {
    
    var y = window.pageYOffset;
    var navHeight =document.getElementById('main-nav').offsetHeight;
    
   if(y >= navHeight) {
       document.getElementById('main-nav').classList.add('transparent');
   } else {
       document.getElementById('main-nav').classList.remove('transparent');
   }
   });