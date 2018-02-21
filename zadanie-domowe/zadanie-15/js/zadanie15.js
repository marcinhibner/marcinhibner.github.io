'use strict';

$( "button" ).click( function() {
 $( "div" ).animate( { 
   "margin-left": '100px',
   "height": '100px',
   "width": '100px',
}, 3000, function() {
  $( "div" ).animate( {
    "background-color": 'blue',
}, 5000 ); 
});
});


// function() {
//   $( "h2" ).show();
// }