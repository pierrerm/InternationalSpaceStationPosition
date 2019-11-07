var btn1 = document.getElementById("btn1");

function getConvertData() {
  var jsonObj = $.getJSON(
    "https://api.exchangerate-api.com/v4/latest/USD",
    doConvert
  );
}

function doConvert(jsonObj) {
  var rates = jsonObj.rates;
  var input = document.getElementById("amount");
  var amount = input.value;
  var select1 = document.getElementById("sel");
  var currency1 = select1.options[select1.selectedIndex].value;
  var select2 = document.getElementById("sel2");
  var currency2 = select1.options[select2.selectedIndex].value;
  var convertedAmount = ((amount * rates[currency2]) / rates[currency1]).toFixed(2);
  document.getElementById("convertedAmount").innerHTML =
    amount + " " + currency1 + " is equal to " + convertedAmount + " " + currency2;
}

function fetchConvertData() {
  var input = document.getElementById("amount");
  var amount = input.value;
  if (amount.match(/^(\d+(\.\d{0,2})?|\.?\d{1,2})$/) != null){
    getConvertData();
  } else {
    document.getElementById("convertedAmount").innerHTML = "Invalid Amount!";
  }
}
