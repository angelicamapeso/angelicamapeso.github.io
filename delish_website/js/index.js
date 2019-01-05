jQuery(document).ready(function($){
  /**********************************
            BREAKPOINTS
  ***********************************/
  function windowChange(){
    var windowSize = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    if(windowSize >= 768){
      rightBttnClick = deskClickRight;
      leftBttnClick = deskClickLeft;

      $(".mobileMenu").hide("fade", 1000);
      $(".mobileBack").hide("fade", 1000);
    }
    if (windowSize < 768){
      rightBttnClick = mobileClickRight;
      leftBttnClick = mobileClickLeft;
    }
    if (windowSize >= 480){
      var noBack = $(".no-background").outerWidth();
      var logoBack = $(".logo-container").outerWidth();
      console.log("working!")
      $("article").css("width", noBack + "px");
      $("aside").css("width", logoBack + "px");
    }
    if(windowSize < 480){
      console.log("480 reached!")
      $("article").innerWidth('100%');
      $("aside").innerWidth('100%');
    }
  }
  //use function when window is resized
  $(window).resize(function(){
    windowChange();
    updatePosition();
    bttnChecker();
  });
  //use function when page is loaded
  windowChange();
  var windowSize = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
  /**********************************
              SLIDESHOW
  ***********************************/
  function updatePosition(){
    //get new listWidth
    var newListWidth = $(".slide-container li").innerWidth();
    listWidth = newListWidth;
    //reset leftPOsition
    leftPosition = 0;
    //add/subtract newlistWidth from position
    leftPosition = leftPosition - (listWidth * rightBttnClick);
    $(".slide-container").css({left:leftPosition});
  }

  var leftPosition = 0;
  var rightBttnClick;
  var leftBttnClick;
  var mobileClickRight = 0;
  var mobileClickLeft = 2;
  var deskClickRight = 0;
  var deskClickLeft = 1;

  var listWidth = $(".slide-container li").innerWidth();

  //BUTTON FUNCTIONS
  function nextBtton(){
      $(".slide-container").animate({
        left: leftPosition - listWidth
      }, 200, function(){
        leftPosition = leftPosition - listWidth;
        if (windowSize >= 768){
          deskClickRight = deskClickRight + 1;
          deskClickLeft = deskClickLeft - 1;

          mobileClickRight = 2;
          mobileClickLeft = 0;
        }
        else if (windowSize < 768){
          mobileClickRight = mobileClickRight + 1;
          mobileClickLeft = mobileClickLeft - 1;

          deskClickRight = 1;
          deskClickLeft = 0;
        }
        bttnChecker();
      });
  }
  function previousBtton(){
      $(".slide-container").animate({
        left: leftPosition + listWidth
      }, 200, function(){
        leftPosition = leftPosition + listWidth;
        if (windowSize >= 768){
          deskClickRight = deskClickRight - 1;
          deskClickLeft = deskClickLeft + 1;

          mobileClickRight = 0;
          mobileClickLeft = 2;
        }
        else if (windowSize < 768){
          mobileClickRight = mobileClickRight - 1;
          mobileClickLeft = mobileClickLeft + 1;

          deskClickRight = 0;
          deskClickLeft = 1;
        }
        bttnChecker();
      });
  }

  function bttnChecker(){
    var slideWindow = Math.round($(".insta-slideshow").width());
    var ulWidth = Math.round($(".slide-container").width());

    if (leftPosition == 0){
      $(".previous").hide();
    }
    else{
      $(".previous").show();
    }
    if (Math.round(leftPosition) >= (slideWindow - ulWidth)-10 && Math.round(leftPosition) <= (slideWindow - ulWidth)+10){
      $(".next").hide();
    }
    else{
      $(".next").show();
    }
  }

  $(".next").on("click", nextBtton);
  $(".previous").on("click", previousBtton);

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
