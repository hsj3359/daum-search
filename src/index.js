import selectUrl from './selectUrl.js';
import getApi from './CreateData.js';
import moreView from './MoreView.js';
import deleteList from './deleteList.js';

const list = document.getElementsByTagName('li');

var sectionNum = 0;
var page = 2;

function setContents() {
  //li태그 onclick설정
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
      active(event.target);
    });
  }
  //처음 로딩할때 트렌딩 설정
  $(document).ready(function () {
    var url = selectUrl(0);
    getApi(url);
  });

  //더보기
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', function () {
    var url = selectUrl(sectionNum);
    moreView(url, 20, page);
    page += 1;
  });
}
setContents();

function active(target) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === target.parentNode) {
      target.parentNode.className = 'active';
      deleteList();
      var url = selectUrl(i);
      getApi(url);
      sectionNum = i;
      page = 2;
      console.log(sectionNum, '페이지 넘버');
    } else {
      list[i].className = '';
    }
  }
}
