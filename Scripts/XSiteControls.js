﻿
window.onload = function () {
    var xmlhttp;
    var oe = document.getElementById("menu");

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "SharedMenu.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
};