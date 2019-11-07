/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
$.getJSON( "https://api.exchangerate-api.com/v4/latest/USD", function( json ) {
  var infoUsd = json; 

  function convert() {
    var input = document.getElementById("input1");
    var amount = input.value;
    var currency1 = select1.options[select1.selectedIndex].value;
    var select1 = document.getElementById("sel1");
    var currency1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("sel2");
    var currency2 = select1.options[select2.selectedIndex].value;
    document.getElementById("input1").innerHTML = amount * infoUsd.currency2 / infoUsd.currency1;
  }
  
});

