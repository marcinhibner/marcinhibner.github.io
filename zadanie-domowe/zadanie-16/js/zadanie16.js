'use strict';

$( "button#dol" ).click( function() {
  $( "p:first" ).insertAfter( $( "p:last" ) );
});


$( "button#gora" ).click( function() {
  $( "p:last" ).insertBefore( $( "p:first" ) );
});
  
