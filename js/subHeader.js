$(document).ready(function () {
  var loca = $(location).attr("href");
  //   alert(loca);
  if (loca.indexOf("images") > 0) {
    var spanWid = $(".gnb li").eq(2).outerWidth();
    var spanLeft = $(".gnb li").eq(2).position().left;
    $(".gnb li").removeClass("active");
    $(".gnb li").eq(2).addClass("active");
    $(".gnb span").css({
      width: spanWid,
      left: spanLeft,
    });
  } else if (loca.indexOf("videos") > 0) {
    var spanWid = $(".gnb li").eq(3).outerWidth();
    var spanLeft = $(".gnb li").eq(3).position().left;
    $(".gnb li").removeClass("active");
    $(".gnb li").eq(3).addClass("active");
    $(".gnb span").css({
      width: spanWid,
      left: spanLeft,
    });
  } else if (loca.indexOf("news") > 0) {
    var spanWid = $(".gnb li").eq(4).outerWidth();
    var spanLeft = $(".gnb li").eq(4).position().left;
    $(".gnb li").removeClass("active");
    $(".gnb li").eq(4).addClass("active");
    $(".gnb span").css({
      width: spanWid,
      left: spanLeft,
    });
  }
  // header position change when scroll down
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("header").css("position", "fixed");
    } else {
      $("header").css("position", "relative");
    }
  });
});
