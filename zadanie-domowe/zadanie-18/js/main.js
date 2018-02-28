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
        
    var par = document.createElement('div');
    
    par.setAttribute("id", "dane-programisty");

    document.body.appendChild(par);
    
    par.innerHTML = '<br>' + 'Imię: ' + jsonObj.imie + '<br>' +  'Nazwisko: ' + jsonObj.nazwisko + '<br>' + 'Zawód: ' + jsonObj.zawod + '<br>' + 'Firma: ' + jsonObj.firma;

    
    }

    httpReq.send();
}


function pobierzDane() {
    ajax( "GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php" );
}

document.getElementById('pobieranie').addEventListener('click', pobierzDane);
