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
  gmap_canvas.src = "https://www.arcgis.com/home/webscene/viewer.html?viewpoint=cam:" + latitude + "," + longitude + ",20000000;0,0&ui=min";
}

function findISS() {
  getISSData();
}