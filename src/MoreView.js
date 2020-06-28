import makeList from './MakeList.js';

function getPatch(url, pagesize, page) {
  var loading = document.getElementById('loading');
  loading.style.display = 'block';
  var title = new Array();
  var image = new Array();
  var path = new Array();
  var totalView = new Array();
  var tampUrl = url + '?pagesize=' + pagesize + '&page=' + page;
  fetch(tampUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.data.length; i++) {
        title.push(data.data[i].title);
        image.push(data.data[i].coverImage);
        path.push(data.data[i].path);
        totalView.push(data.data[i].totalView);
      }
      var count = (page - 1) * 20;
      makeList(data.data.length, title, image, path, totalView, count);
    });
}

export default getPatch;
