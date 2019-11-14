var positionButton = document.getElementById("positionButton");

function getISSData() {
  var jsonObj = $.getJSON(
    "https://api.wheretheiss.at/v1/satellites/25544",
    updatePosition
  );
}

function updatePosition(jsonObj) {
  var gmap_canvas = document.getElementById("gmap_canvas");
  var latitude = jsonObj.latitude;
  var longitude = jsonObj.longitude;
  gmap_canvas.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "t=&z=13&ie=UTF8&iwloc=&output=embed";
}

function findISS() {
  getISSData();
}