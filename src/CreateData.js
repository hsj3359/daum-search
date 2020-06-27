import makeList from './MakeList.js';

function bad(error) {
  console.log('error');
}

function getPatch(url) {
  var title = new Array();
  var image = new Array();
  var path = new Array();
  var totalView = new Array();

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
      makeList(data.data.length, title, image, path, totalView);
    })
    .catch(bad);
}

export default getPatch;
