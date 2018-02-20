'use strict';

$( "button" ).click( function() {
 $( "div" ).animate( { 
   right: '100px',
   height: '100px',
   width: '100px',
 }, "3000" );
});
 

// function callbackZwrotny () {
//   $("#kwadrat").animate({
//       "margin-left": "100px"
//       "height": "100px",
//       "width": "100px",
//   }, 3000);
// };


//     callbackZwrotny();
    
//     $("#kwadrat").animate({
//         "background-color": "blue",
//     } , 5000, callbackZwrotny);
// });