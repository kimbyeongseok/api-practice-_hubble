$(document).ready(function () {
  var items = [];
  var getCount = 9;
  function getImages(count) {
    $.ajax({
      url: "http://hubblesite.org/api/v3/image/" + count,
      dataType: "jsonp",
      success: function (data) {
        //   console.log(data);
        items =
          '<div class="imgItem">' +
          "<div>" +
          '<img src="http:' +
          data.image_files[3].file_url +
          '" alt="" />' +
          "<span>" +
          '<a href="imagesDetail.html?num=' +
          count +
          '">View This Image</a>' +
          "</span>" +
          "<p>" +
          '<img src="images/loading.gif" alt="" />' +
          "</p>" +
          "</div>" +
          "</div>";
        $(".imgItems").append(items);
      },
    });
  }
  for (var i = 1; i < getCount; i++) {
    getImages(i);
    $(".loadMore").click(function () {
      getImages(getCount);
      getCount++;
      if (getCount >= 51) {
        $(".btnBox").html(
          '<a href="http://www.hubblesite.org" class="btn loadMore" target="_blank">Visit Hubble Site</a>'
        );
      }
    });
  }
});
