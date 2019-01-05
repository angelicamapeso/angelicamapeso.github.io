jQuery(document).ready(function($){
  /**********************************
            BREAKPOINTS
  ***********************************/
  function windowChange(){
    var windowSize = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    if(windowSize >= 768){
      $(".mobileMenu").hide("fade", 1000);
      $(".mobileBack").hide("fade", 1000);
    }
  }
  //use function when window is resized
  $(window).resize(function(){
    windowChange();
  });
  //use function when page is loaded
  windowChange();
  var windowSize = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

  /**********************************
              HAMBURGER MENU
  ***********************************/
  $(".menuIcon").on("click", function(){
    $(".mobileMenu").show("slide", {direction:"right"}, 1000);
    $(".mobileBack").show("fade", 1000);
  });
  $(".closeIcon").on("click", function(){
    $(".mobileMenu").hide("slide", {direction:"right"}, 1000);
    $(".mobileBack").hide("fade", 1000);
  });
$(".mobileBack").on("click", function(){
  $(".mobileMenu").hide("slide", {direction:"right"}, 1000);
  $(".mobileBack").hide("fade", 1000);
  });
});

/**********************************
            MAP
***********************************/
function initMap() {
  var bakeryLocation = {lat: 45.386080, lng: -75.676459};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat:45.38768,lng:-75.676459}
    });
  var marker = new google.maps.Marker({
    position: bakeryLocation,
    map: map,
    });
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  var delishMessage = '<div class="delishMessage">' +
  '<div id="mapImage"></div>'+
  '<div class="mapText">'+
  '<h2 class="h2nonWhite" id="maph2">Delish: Pastry Shoppe</h2>'+
  '<p class="pNonWhite ph2" ><span style="font-family:aileron_bold;">221 Baker Street,</span>Ottawa ON</p>'+
  '<p class="pNonWhite ph2">For your sweet tooth needs!</p>'+
  '</div>'+
  '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: delishMessage,
    maxWidth: 250
  });
  infowindow.open(map, marker);
  marker.addListener("click", function(){
    infowindow.open(map, marker);
  });
}
