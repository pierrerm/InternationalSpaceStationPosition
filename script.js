var positionButton = document.getElementById("positionButton");

function getPos() {
  var jsonObj = $.getJSON(
    "http://api.open-notify.org/iss-now.json",
    updatePosition
  );
}

function updatePosition(jsonObj) {
  var coordinates = jsonObj.iss_position;
  var gmap_canvas = document.getElementById("gmap_canvas");
  var latitude = coordinates.latitude;
  var longitude = coordinates.longitude;
  gmap_canvas.src = "";
}

function findISS() {
  getConvertData();
}