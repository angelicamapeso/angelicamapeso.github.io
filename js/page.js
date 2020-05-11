jQuery(document).ready(function($){
  /**********************************
              HAMBURGER MENU
  ***********************************/
  $("#hamburger").on("click", function(){
    event.preventDefault();
    overlay_open($("#hamburger_menu"));
  });
  $("#close").on("click", function(){
    event.preventDefault();
    overlay_close($("#hamburger_menu"));
  });
  /**********************************
              OVERLAY
  ***********************************/
  //use function for when something is clicked
  function overlay_open(element) {
    element.scrollTop(0);
    element.css('overflow', 'auto');
    element.fadeIn(200, bodyScroll_check);

  }
  function overlay_close(element) {
    element.css('overflow', 'hidden');
    element.fadeOut(200, bodyScroll_check);
  }

  function bodyScroll_check() {
    var hamburgerMenu = $("#hamburger_menu");
    var imageExpand = $("#image_expand");

    var hamburgerMenuIsVisible = hamburgerMenu.is(":visible");
    var imageExpandIsVisible = imageExpand.is(":visible");

    if (hamburgerMenuIsVisible || imageExpandIsVisible) {
      if (!document.body.classList.contains('noscroll')) {
        document.body.classList.add('noscroll');
      }
      if (hamburgerMenuIsVisible && imageExpandIsVisible) {
        imageExpand.css('overflow', 'hidden');
      }
      else {
        imageExpand.css('overflow', 'auto');
      }
    }
    else{
      document.body.classList.remove('noscroll');
    }

    console.log("Hamburger menu visible: " + hamburgerMenuIsVisible);
    console.log("Image Expand visible: " + imageExpandIsVisible);

  }
  //if any of these elements are visible, then make sure no scroll is applied (if (it hasn't been applied already)

  //else if none of these elements are visible, remove that no scroll if it hasn't been removed already

  //put a noscroll class on the body to prevent it from scrolling
  //keep the overlay normal
  /**********************************
              LINKS
  ***********************************/
  $(".home").click(function(){
    window.location = "index.html";
  });
  $(".about").click(function(){
    window.location = "about.html";
  });
  $(".delish").click(function(){
    window.location = "delish.html";
  });
  $(".simplet").click(function(){
    window.location = "simplet.html";
  });
  $(".audio").click(function(){
    window.location = "audio.html";
  });
  /*$(".compression").click(function(){
    window.location = "compression.html";
  });*/
  $(".survival").click(function(){
    window.location = "survival.html";
  });
  $(".canadabuys").click(function(){
    window.location = "canadabuys.html";
  });
  $(".naturelive").click(function(){
    window.location = "naturelive.html";
  });
  /**********************************
              Image Expand
  ***********************************/
  /*var docHeight;
  var windowPos;
  var backgroundHeight;
  var imageHeight;
  var expandWidth;
  var percentage;
  var width;
  var height;*/

  //expand click
  //pass the image to the src
  $(".expand").click(function() {
    var bg = this.src;
    $("#expanded_image").attr('src', bg);

    overlay_open($("#image_expand"));
  });
  $("#close_expand").click(function(){

    overlay_close($("#image_expand"));
    $("#expanded_image").css('background-image','');
  });


  //overlay closed

  /*$(".expand").click(function(){
    var bg = this.src;

    windowPos = $(document).scrollTop() + 200;
    height = this.naturalHeight;
    width = this.naturalWidth;

    $("#expanded_image").attr('src',bg);

    //get the width;
    var element = $("#expanded_image").clone();
    element.css({ visibility: 'hidden' });
    $('body').append(element);
    expandWidth = element.width();
    element.remove();

    percentage = expandWidth/width;
    imageHeight = percentage * height;
    docHeight = $(document).height();

    backgroundHeight = imageHeight + windowPos;

    if (backgroundHeight < docHeight) {
      $("#image_expand").css('height', docHeight);
    }
    else {
        $("#image_expand").css('height', backgroundHeight);
    }

    $("#expanded_image").css('top', windowPos);

    $("#image_expand").show("fade");

  });
  $("#close_expand").click(function(){
    $("#image_expand").hide("fade");
    $("#expanded_image").css('background-image','');
  });

  */
  /**********************************
            Window Resize
  ***********************************/
  /* var windowWidth = window.innerWidth;

  $(window).resize(function(){

    windowPos = $(document).scrollTop() + 200;
    //get the width;
    var element = $("#expanded_image").clone();
    element.css({ visibility: 'hidden' });
    $('body').append(element);
    expandWidth = element.width();
    element.remove();


    percentage = expandWidth/width;
    imageHeight = percentage * height;
    docHeight = $(document).height();

    backgroundHeight = imageHeight + windowPos;

    if ($("#image_expand").is(":visible")){
      if (backgroundHeight < docHeight) {
              $("#image_expand").css('height', docHeight);
      }
    else {
        $("#image_expand").css('height', backgroundHeight);
      }
    }
  });
  */
});
