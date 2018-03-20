'use strict';

function fibonacci(n) {
    var ciagFiboTab = [0,1]; 
    
    for ( var i = 2; i <= n; i++ ) { 
        ciagFiboTab.push( ciagFiboTab[i-1] + ciagFiboTab[i-2] ) 
    }
    return ciagFiboTab[n];
}

console.log(fibonacci(2));

