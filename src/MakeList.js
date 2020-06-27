function makeList(num, title, image, path, totalView) {
  var list = document.getElementById('list');
  var text = '';
  for (var i = 0; i < num; i++) {
    text += "<div class='card' style='width: 18rem;'>";
    text += "<a href='https://1boon.kakao.com/" + path[i] + "'>";
    text +=
      "<img class='card-img-top' src='" + image[i] + "' alt='Card image cap'>";
    text += "<div class='card-body'>";
    text += "<h5 class='card-title'>" + title[i] + '</h5>';
    text +=
      "<p class='card-text' style = 'float:right;' >" + totalView[i] + '</p >';
    text += '</div ></a></div>';
    $('#list').append(text);
    text = '';
  }
}

export default makeList;
