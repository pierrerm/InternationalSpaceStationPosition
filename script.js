function convert() {
  var input = document.getElementById("input1");
  var amount = input.value;
  var select1 = document.getElementById("sel1");
  var currency1 = select1.options[select1.selectedIndex].value;
  var select2 = document.getElementById("sel2");
  var currency2 = select1.options[select2.selectedIndex].value;
  var info = $.getJSON(
    "https://api.exchangerate-api.com/v4/latest/USD",
    convertFor(amount, currency1, currency2)
  );
}

function convertFor(info, amount, currency1, currency2){
  document.getElementById("result").innerHTML = amount * info.results[0].currency2 / info.results[0].currency1;
}