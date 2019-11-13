
window.onload = function () {
    var xmlhttp;
    var oe = document.getElementById("menu");

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "SharedMenu.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
};

window.onload = function () {
    var xmlhttp;
    var oe = document.getElementById("footer");

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "SharedFooter.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
};
