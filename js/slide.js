$(document).ready(function () {
  var positionNews = function () {
    var currentIndex = 0;
    var winWidth = $(window).width();
    var slideCnt = 3;
    var itemLength = 0;
    var itemWidth = 0;

    $(document).ajaxComplete(function () {
      itemLength = $(".slideItem").length;
      $(".slideBox").width($(".slideItem").outerWidth() * itemLength);
      itemWidth = $(".slideBox").outerWidth() / itemLength;
      $(".slideItem").outerWidth(itemWidth);

      if ((winWidth < 950) & (winWidth > 500)) {
        slideCnt = 2;
      } else if (winWidth <= 500) {
        slideCnt = 1;
      }
    });
    function playSlide(n) {
      $(".slideBox").animate({ left: itemWidth * n + "px" }, 200);
      currentIndex = n;
    }
    $(".slideNav button").click(function () {
      if ($(this).hasClass("next")) {
        if (currentIndex == -itemLength + slideCnt) {
          return false;
        } else {
          playSlide(currentIndex - 1);
        }
      } else {
        if (currentIndex === 0) {
          return false;
        } else {
          playSlide(currentIndex + 1);
        }
      }
    });
    playSlide(currentIndex);
  };
  positionNews();
});
