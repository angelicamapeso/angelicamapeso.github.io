jQuery(document).ready(function($){
  /**********************************
              Slideshow
  ***********************************/
  var sizes ={
    slideWidth: 0,
    slideCount: 0,
    slideWrap: 0,
    windowWidth: 0
  };

  var mobile_slide;
  var mobile_button;
  function windowCheck() {
      if (sizes.windowWidth > 600) {
        if (mobile_slide == null && mobile_button == null){
          var currentId = $(".slide:nth-child(2)").attr("id");
          mobile_slide = $("#mobile_slide").detach();
          mobile_button= $("#mobile_button").detach();
          if (currentId == "delish_slide") {
            $("#slides li:last-child").prependTo("#slides");
          }
          circleChange();
        }
      }
      else {
        if (mobile_slide != null && mobile_button != null){
          var currentId = $(".slide:nth-child(2)").attr("id");
          if (currentId == "audio_slide"){
            mobile_slide.insertBefore("#delish_slide");
          }
          else if (currentId == "app_slide"){
            mobile_slide.appendTo("#slides");
          }
          else if (currentId == "delish_slide"){
            mobile_slide.insertBefore("#delish_slide");
            $(".slide:first-child").appendTo("#slides");
          }
          mobile_button.insertBefore("#delish_button");
          mobile_slide = null;
          mobile_button = null;

          circleChange();
        }
      }
  }

  $(window).resize(function(){
    sizes.slideWidth = $(".slide").width();
    sizes.slideCount = $(".slide").length;
    sizes.slideWrap = sizes.slideWidth*sizes.slideCount;
    sizes.windowWidth = window.innerWidth;

    $("#slides").css({marginLeft:-sizes.slideWidth});
    $("#slides").css({width: sizes.slideWrap});

    windowCheck();
  });

    /**move slides**/
  function circleChange() {
    var currentId = $(".slide:nth-child(2)").attr("id");
    if (currentId == "mobile_slide"){
      $("#mobile_button").css("background-color","rgba(255,255,255,1)");
    }
    else {
      $("#mobile_button").css("background-color","rgba(255,255,255,0.3)");
    }
    if (currentId == "delish_slide"){
      $("#delish_button").css("background-color","rgba(255,255,255,1)");
    }
    else {
      $("#delish_button").css("background-color","rgba(255,255,255,0.3)");
    }
    if (currentId == "app_slide"){
      $("#simplet_button").css("background-color","rgba(255,255,255,1)");
    }
    else {
      $("#simplet_button").css("background-color","rgba(255,255,255,0.3)");
    }
    if (currentId== "audio_slide"){
      $("#audio_button").css("background-color","rgba(255,255,255,1)");
    }
    else {
      $("#audio_button").css("background-color","rgba(255,255,255,0.3)");
    }
  }
  function moveLeft(){
    $("#slides").animate({
      left:+sizes.slideWidth
    },{
      duration:400,
      complete:function(){
      $("#slides li:last-child").prependTo("#slides");
      $("#slides").css('left','');
      circleChange();
    }
    });

  }
  function moveRight(){
    $("#slides").animate({
      left:-sizes.slideWidth
    }, {
      duration:400,
      complete:function(){
        $("#slides li:first-child").appendTo("#slides");
        $("#slides").css('left','');
        circleChange();
      }
    });
  }

  /**startup run **/
  sizes.windowWidth = window.innerWidth;
  if (sizes.windowWidth > 600) {
    if (mobile_slide == null && mobile_button == null) {
      mobile_slide = $("#mobile_slide").detach();
      mobile_button= $("#mobile_button").detach();
    }
  }

  $("#slides li:last-child").prependTo("#slides");
  circleChange();

  sizes.slideWidth = $(".slide").width();
  sizes.slideCount = $(".slide").length;
  sizes.slideWrap = sizes.slideWidth * sizes.slideCount;

  $("#slides").css({marginLeft:-sizes.slideWidth});
  $("#slides").css({width: sizes.slideWrap});

  circleChange();

  $("#left_arrow").click(function(){
    moveLeft();
  });
  $("#right_arrow").click(function(){
    moveRight();
  });

  /**********************************
              Scrollin the Page
  ***********************************/
  $("#view_button").on("click",function() {
    if ($("#project_icons").is(":visible")){
      $("html, body").animate({
        scrollTop: 0
      }, 500, function(){
        $("#view_button").text("+ View All");
      });
      $("#project_icons").slideUp(500);
    }
    else {
      $("#project_icons").slideDown(500);
      $("html, body").animate({
        scrollTop: $("#project_icons").offset().top
      }, 500, function(){
        $("#view_button").text("- Close All");
      });
    }
  });
  /**********************************
              Hovers
  ***********************************/
  $(".slide_hover").hover(function(){
    $(".slide_text").css("color", "rgb(255,211,212)");
  },
    function() {
      $(".slide_text").css("color", "rgb(255,255,255)");
    });
    $(".slide_text_wrap >h3").hover(function(){
      $(".slide_text").css("color", "rgb(255,211,212)");
    },
      function() {
        $(".slide_text").css("color", "rgb(255,255,255)");
    });
    $(".slide_text_wrap >h4").hover(function(){
      $(".slide_text").css("color", "rgb(255,211,212)");
    },
      function() {
        $(".slide_text").css("color", "rgb(255,255,255)");
    });
    $(".icon_link").hover(function(){
      $(".slide_text").css("color", "rgb(255,211,212)");
    },
      function() {
        $(".slide_text").css("color", "rgb(255,255,255)");
    });
    $(".icon").hover(function(){
      jQuery(this).children("img").fadeTo("slow", 0.7);
    }, function(){
      jQuery(this).children("img").fadeTo("slow", 1.0);
    });
});
