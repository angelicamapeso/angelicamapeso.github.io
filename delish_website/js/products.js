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
    if(windowSize >= 480){
      $("#product-body").addClass("main-nonhome");
    }
    else{
      $("#product-body").removeClass("main-nonhome");
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
  /**********************************
              LINKING DIVS
  ***********************************/
  $("#seasonalBox").click(function(){
      window.location = "seasonal.html";
  });
  $("#breadBox").click(function(){
      window.location = "bread.html";
  });
  $("#dessertBox").click(function(){
      window.location = "desserts.html";
  });
  $("#snackBox").click(function(){
      window.location = "snacks.html";
  });

});
