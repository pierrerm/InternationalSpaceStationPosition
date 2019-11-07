/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
$.getJSON( "https://api.exchangerate-api.com/v4/latest/USD", function( json ) {
  var info = json;  

// prints "hi" in the browser's dev tools console
console.log("hi");
