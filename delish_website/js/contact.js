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

  /**********************************
              CONTACT FOCUS
  ***********************************/
  $("input, textarea").focus(function(){
    $(this).siblings().css("color", "#e33e41");
    $(this).css("color", "#e33e41");
  });
  $("input, textarea").focusout(function(){
    $(this).siblings().css("color", "#690b0c");
    $(this).css("color", "#690b0c");
  });
});
