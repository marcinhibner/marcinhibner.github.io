'use strict';

$( "#count-sum" ).click( function() {
  var sumaWyplat = 0;
  $( ".salary" ).each( function() {
    console.log( $( this ).text() );
    sumaWyplat += parseInt ( $( this ).text() );
  });
  $( "#sum" ).html(sumaWyplat)
  console.log(sumaWyplat);
});