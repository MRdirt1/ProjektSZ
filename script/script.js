javascript
window.onload = function() {
 showPopup();
};

function showPopup() {
 var popup = document.getElementById("popup");
 popup.style.display = popup.style.display === "none" ? "block" : "none";
}

function hidePopup() {
 showPopup();
}