/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
$.getJSON( "https://api.exchangerate-api.com/v4/latest/USD", function( json ) {
  var infoUsd = json;  

  $('#sel').append('<option value="' + infoUsd.base + '">' + infoUsd.base + '</option>');
});