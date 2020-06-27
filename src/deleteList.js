var card = document.getElementsByClassName('card');
var list = document.getElementById('list');
function deleteList() {
  for (var i = card.length - 1; i > -1; i--) {
    list.removeChild(card[i]);
  }
}
export default deleteList;
