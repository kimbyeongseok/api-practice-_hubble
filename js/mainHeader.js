$(document).ready(function () {
  // activate navigation
  var activateNav = function () {
    $(".gnb li").click(function () {
      //   var liWidth = $(this).width();
      //   var liLeft = $(this).position().left;
      var liIndex = $(this).index();
      var pagePos = $("section").eq(liIndex).offset().top;

      //   $(this).siblings("span").width(liWidth);
      //   $(".gnb span").animate({ left: liLeft }, 200);

      $("html, body").animate({ scrollTop: pagePos + 1 }, 300);
    });
    $(".gnb li").eq(0).trigger("click");
  };
  activateNav();
  // header li activate when scroll down and up
  var activateHeader = function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      for (var i = 0; i < $("section").length; i++) {
        var secTop = $("section").eq(i).offset().top;
        var secBtm = secTop + $("section").eq(i).outerHeight();
        var liWidth = $(".gnb li").eq(i).outerWidth();
        var liLeft = $(".gnb li").eq(i).position().left;
        var winHeight = $(window).height();
        var scrollBtm = $(".wrap").height() - winHeight;
        console.log(scrollBtm);
        if (scroll >= secTop && scroll < secBtm) {
          $(".gnb li").eq(i).addClass("active");
          $(".gnb").find("span").width(liWidth);
          $(".gnb").find("span").stop().animate({ left: liLeft }, 200);
        } else {
          $(".gnb li").eq(i).removeClass("active");
        }
        if (scroll >= scrollBtm) {
          $(".gnb li").eq(3).removeClass("active");
          $(".gnb li.lastPage").addClass("active");
          $(".gnb").find("span").width($(".lastPage").outerWidth());
          $(".gnb")
            .find("span")
            .stop()
            .animate({ left: $(".lastPage").position().left }, 200);
        }
        if (scroll >= secTop) {
          if (i % 2 == 0) {
            $("header").removeClass("on");
            $("header img").attr("src", "images/logo.png");
          } else {
            $("header").addClass("on");
            $("header img").attr("src", "images/logo_black.png");
          }
        }
      }
    });
  };
  activateHeader();
});
