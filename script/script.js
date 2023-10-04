window.onload = function() {
    showPopup();
};

function showPopup(id) {
    var popup = document.getElementById("popup" + id);
    popup.style.display = "block";
}

function hidePopup(id) {
    var popup = document.getElementById("popup" + id);
    popup.style.display = "none";
}