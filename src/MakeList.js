function makeList(num, title, image, path, totalView, count) {
  for (var i = 0; i < num; i++) {
    var div = document.createElement('div');
    div.className = 'basket';
    div.id = 'basket' + count;
    list.append(div);
    div = document.getElementById('basket' + count);
    var a = document.createElement('a');
    a.className = 'url';
    a.id = 'url' + count;
    a.href = 'https://1boon.kakao.com/' + path[i];
    div.append(a);
    a = document.getElementById('url' + count);
    var img = document.createElement('img');
    img.src = '' + image[i].replace('http', 'https');
    a.append(img);
    var text = '' + title[i];
    a.append(text);
    var br = document.createElement('br');
    a.append(br);
    var Ptext = '' + totalView[i];
    a.append(Ptext);
    count += 1;
  }
}

export default makeList;
