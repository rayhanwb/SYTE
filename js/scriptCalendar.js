//=============================== Tugas Web ===============================


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//=============================== Tugas KPL ===============================


var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close1")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
}
span.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
