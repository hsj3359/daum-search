function active(target) {
    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
        if (list[i] == target) {
            target.className = "active";
            fetchUrl(i);
        }
        else {
            list[i].className = "";
        }
    }
}


function makeList(num, title, image, path, totalView) {
    var list = document.getElementById("list");
    list.innerHTML = "";
    var text = "";
    for (var i = 0; i < num; i++) {
        text += "<div class='card' style='width: 18rem;'>"
        text += "<a href='https://1boon.kakao.com/" + path[i] + "'>"
        text += "<img class='card-img-top' src='" + image[i] + "' alt='Card image cap'>"
        text += "<div class='card-body'>"
        text += "<h5 class='card-title'>" + title[i] + "</h5>"
        text += "<p class='card-text' style = 'float:right;' >" + totalView[i] + "</p >"
        text += "</div ></a></div>"
        $('#list').append(text);
        text = "";
    }
}
function bad(error) {
    console.log("error");
}

function moreView() {

}

function fetchUrl(index) {
    const url = ["https://1boon.kakao.com/ch/trending.json", "http://1boon.kakao.com/ch/issue.json", "http://1boon.kakao.com/ch/enter.json"]
    var title = new Array();
    var image = new Array();
    var path = new Array();
    var totalView = new Array();

    fetch(url[index]).then(function (response) { return response.json(); }).then(function (data) {
        console.log(data);
        for (var i = 0; i < data.data.length; i++) {
            title.push(data.data[i].title);
            image.push(data.data[i].coverImage);
            path.push(data.data[i].path);
            totalView.push(data.data[i].totalView);
        }
        console.log(title);
        console.log(image);
        console.log(path);
        console.log(totalView);
        makeList(data.data.length, title, image, path, totalView)

    }).catch(bad);

}


