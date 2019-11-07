
  function convert() {
    var input = document.getElementById("amount");
    var amount = input.value;
    var select1 = document.getElementById("sel");
    var currency1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("sel2");
    var currency2 = select1.options[select2.selectedIndex].value;

    var info = $.getJSON(
      "https://api.exchangerate-api.com/v4/latest/USD",
      convertFor(amount, currency1, currency2)
    );
  }

  function convertFor(info, amount, currency1, currency2) {
    console.log(amount);
    console.log(info.currency1);
    console.log(info.currency2);
    document.getElementById("result").innerHTML =
      (amount * info.currency2) / info.currency1;
  }

