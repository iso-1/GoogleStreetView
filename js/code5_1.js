var map;
var panorama;

function initialize() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(35.665375,139.729593), 16);

    var street = new GStreetviewOverlay();
    map.addOverlay(street);

    var slatlng = new GLatLng(35.665375,139.729593);
    var option = { latlng:slatlng };

    var scontainer = document.getElementById("street");
    panorama = new GStreetviewPanorama(scontainer, option);

    GEvent.addListener(panorama, "initialized", moveMap);
  }
}

function move(){
  var direc = document.getElementById("direc").value;
  panorama.followLink(parseInt(direc));
}

function moveMap(loc){
  map.panTo(loc.latlng);
}