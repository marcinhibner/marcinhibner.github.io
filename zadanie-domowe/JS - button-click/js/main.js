'use strict';

function ajax( method, url ) {
    
    
    var httpReq = new XMLHttpRequest();
    
    
    httpReq.open( method, url );
    
    
    
    httpReq.onreadystatechange = function() {
        

        if ( httpReq.readyState == 4 ) {
            
        
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                console.log(returnData);
                httpReq.onsuccess(returnData);
            
                httpReq = null;
                
            }
            
        }
    
    }


httpReq.onsuccess = function(response) {
        var jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
    var par1 = document.createElement('p');
    var par2 = document.createElement('p');
    var par3 = document.createElement('p');
    
    document.body.appendChild(par1);
    document.body.appendChild(par2);
    document.body.appendChild(par3);
    
    par1.innerHTML = 'UserId: ' + jsonObj.userId;
    par2.innerHTML = 'UserName: ' + jsonObj.userName;
    par3.innerHTML = 'UserURL: ' + jsonObj.userURL + '<p>----------</p>';
    
    }

    httpReq.send();
}

function pobierzDane() {
    ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );
}

document.getElementById('pobierz').addEventListener('click', pobierzDane);
