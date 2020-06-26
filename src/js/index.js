
function active(target) {
    var list = document.getElementsByClassName("active");
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
        list[i].className = "";
    }
    target.className = "active";

}