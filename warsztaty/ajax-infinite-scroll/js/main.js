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
        
        var beginOfData = document.createElement('p');
        var endOfData = document.createElement('p');
        
        beginOfData.innerHTML = '<br>-------BEGIN OF DATA-------<br>';
        endOfData.innerHTML = '<br>-------END OF DATA-------<br><br><br>';
        
        document.body.appendChild(beginOfData);
        
        jsonObj.forEach(function(element, index) {
            var userID = document.createElement('p');
            userID.innerHTML = 'userID: ' + element.id;
            document.body.appendChild(userID);
            
            var userName = document.createElement('p');
            userName.innerHTML = 'userName: ' + element.name;
            document.body.appendChild(userName);
            
            var userURL = document.createElement('p');
            userURL.innerHTML = 'userURL: ' + element.email + '<br>--------------';
            document.body.appendChild(userURL); 
        });
        document.body.appendChild(endOfData);
        
    }

    httpReq.send();
}
   
window.addEventListener('scroll', function() {
    
    var docHeight = document.documentElement.offsetHeight; //1040
    var offsetY = parseInt(this.innerHeight + this.pageYOffset, 10); //ilosc przeskrolowanych pikseli + wysokosc okna
    
    if (docHeight === offsetY) {
        ajax("GET", "https://jsonplaceholder.typicode.com/users")
    }
});