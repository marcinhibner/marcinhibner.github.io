'use strict';

function ajax( method, url ) {
    
    
    var httpReq = new XMLHttpRequest();
    
    
    httpReq.open( method, url );
    
    
    
    httpReq.onreadystatechange = function() {
        

        if ( httpReq.readyState == 4 ) {
            
        
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

//                console.log(returnData);
                httpReq.onsuccess(returnData);
            
                httpReq = null;
                
            }
            
        }
    
    }


httpReq.onsuccess = function(response) {
        var jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
    var par1 = document.createElement('div');
    var par2 = document.createElement('div');
    var par3 = document.createElement('div');
    var par4 = document.createElement('div');
    
    document.body.appendChild(par1);
    document.body.appendChild(par2);
    document.body.appendChild(par3);
    document.body.appendChild(par4);
    
    par1.innerHTML = 'Imię: ' + jsonObj.imie; 
    par2.innerHTML = 'Nazwisko: ' + jsonObj.nazwisko;
    par3.innerHTML = 'Zawód: ' + jsonObj.zawod;
    par4.innerHTML = 'Firma: ' + jsonObj.firma;
    
    }

    httpReq.send();
}


function pobierzDane() {
    ajax( "GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php" );
}

document.getElementById('pobieranie').addEventListener('click', pobierzDane);
