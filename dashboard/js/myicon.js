const input = document.getElementById("icon-action");
var popup = document.getElementById("iconPopup");
var closeButton = document.querySelector(".close-button");
const iconselect = document.querySelectorAll(".card-icon p");

// When the user clicks the close button, close the popup
function closeicon() {
  popup.style.display = "none";
}
// When the user clicks the Open button
function openicon() {
  popup.style.display = "block";
  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
}
function copyContent(button) {
    const content = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(content);
    popup.style.display = "none";
  }


