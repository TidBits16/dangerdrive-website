var modal = document.getElementById("modal");
var modalBackground = document.getElementById("modal-background");
var badge = document.getElementById("badge");
/// var span = document.getElementsByClassName("close-btn")[0];

badge.onclick = function() {
    modal.style.display = "block";
    modalBackground.style.display = "block";
}

modalBackground.onclick = function() {
    modal.style.display = "none";
    modalBackground.style.display = "none";
} 