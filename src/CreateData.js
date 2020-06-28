import makeList from './MakeList.js';

function getPatch(url) {
  var title = new Array();
  var image = new Array();
  var path = new Array();
  var totalView = new Array();

  var loading = document.getElementById('loading');
  loading.style.display = 'block';

  fetch(url)
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
      makeList(data.data.length, title, image, path, totalView, 0);
    });
}

export default getPatch;
