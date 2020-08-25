$(document).ready(function () {
  var loca = $(location).attr("href");
  //   alert(loca);
  if (loca.indexOf("images")) {
    var spanWid = $(".gnb li").eq(2).outerWidth();
    var spanLeft = $(".gnb li").eq(2).position().left;
    $(".gnb li").removeClass("active");
    $(".gnb li").eq(2).addClass("active");
    $(".gnb span").css({
      width: spanWid,
      left: spanLeft,
    });
  }
});
