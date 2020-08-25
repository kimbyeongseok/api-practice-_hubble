$(document).ready(function () {
  //http://hubblesite.org/api/v3/external_feed/esa_feed
  var imgItems = [];
  var vidItems = [];
  var vidDesc = [];
  var newsItems = [];

  function getItems(item, count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/" + item + "/" + count,
      dataType: "jsonp",
      success: function (data) {
        imgItems =
          '<div class="imgItem">' +
          "<div>" +
          '<img src="http:' +
          data.image_files[3].file_url +
          '" alt="" />' +
          "<span>" +
          '<a href="#">View This Image</a>' +
          "</span>" +
          "</div>" +
          "</div>";
        $(".imageBox").append(imgItems);
      },
    });
  }
  for (var i = 1; i < 9; i++) {
    getItems("image", i);
    getNews(i);
  }

  function getVideos(count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/video/" + count,
      dataType: "jsonp",
      success: function (data) {
        vidItems =
          '<video class="video" autoplay muted controls playsinline loop>' +
          '<source src="http:' +
          data.video_files[2].file_url +
          '" type="video/mp4">' +
          '<source src="http:' +
          data.video_files[2].file_url +
          '" type="video/webm">' +
          "</video>";
        vidDesc =
          "<h1>" +
          data.name +
          "</h1>" +
          "<p>" +
          data.short_description +
          "</p>" +
          "<h2><b>Mission :</b> " +
          data.mission +
          "</h2>" +
          "<h2><b>Collection :</b> " +
          data.collection +
          "</h1>";
        $(".videoSec").append(vidItems);
        $(".decSec").prepend(vidDesc);
      },
    });
  }
  getVideos(i);

  function getNews(count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/external_feed/esa_feed",
      dataType: "jsonp",
      success: function (data) {
        var newsTitle = data[count].title;
        var newsImg = data[count].thumbnail_large;
        newsItems =
          '<div class="slideItem">' +
          '<div class="slideItem_content">' +
          '<div class="slideImg">' +
          '<img src="http:' +
          newsImg +
          '" alt="" />' +
          "</div>" +
          '<div class="slideTxt">' +
          "<p>" +
          newsTitle.substr(0, 43) +
          "... </p>" +
          "</div>" +
          '<div class="btnBox">' +
          ' <a href="" class="btn">View This Article</a>' +
          "</div>" +
          "</div>" +
          "</div>";
        $(".slideBox").append(newsItems);
      },
    });
  }
});
