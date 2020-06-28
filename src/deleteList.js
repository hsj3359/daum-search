var card = document.getElementsByClassName('basket');
var list = document.getElementById('contents');
function deleteList() {
  for (var i = card.length - 1; i > -1; i--) {
    list.removeChild(card[i]);
  }
}
export default deleteList;
