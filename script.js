
  function convert() {

    var jsonObj = $.getJSON(
      "https://randomuser.me/api/?gender=male",
      convertFor()
    );
  }

  function convertFor(jsonObj) {
    var input = document.getElementById("amount");
    var amount = input.value;
    var select1 = document.getElementById("sel");
    var currency1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("sel2");
    var currency2 = select1.options[select2.selectedIndex].value;
    console.log(amount);
    console.log(JSON.stringify(jsonObj.results[0]));
    console.log(jsonObj.currency2);
    document.getElementById("result").innerHTML =
      (amount * jsonObj.currency2) / jsonObj.currency1;
  }

