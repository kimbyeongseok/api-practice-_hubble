$(document).ready(function () {
  //   about panel height fit to tab height
  var fitHeight = function () {
    var tabHeight = $(".aboutTab .tab div").outerHeight();
    $(".panelImg").outerHeight(tabHeight);
    $(window).resize(function () {
      var tabHeight = $(".aboutTab .tab div").outerHeight();
      $(".panelImg").outerHeight(tabHeight);
    });
  };
  fitHeight();

  //   about section tabs function
  $(".aboutTab .tab, .mobileTab button").click(function () {
    var tabIndex = $(this).index();
    $(".aboutPanel").hide();
    $(".aboutPanel").eq(tabIndex).show();
    $(".aboutTab .tab, .mobileTab button").removeClass("on");
    $(this).addClass("on");
  });
  $(".aboutPanel").eq(0).show();
});

$(window).on("load", function () {
  $("body").addClass("loaded");
  $(".main_txt .slogan h1").addClass("aniEffect1");
  $(".main_txt .txt_img").addClass("aniEffect2");
  $(".main_txt .txt_desc").addClass("aniEffect3");
});
