"use strict";

/* SKRYPT ZERUJE STAN LICZNIKA KLIKNIĘC W ELEMENT O ID "myBox" CO 30 SEKUND */

let count = document.getElementById("clickCount");

setInterval(function () {
	count.innerHTML = 0;
	counter = 0;
}, 30000);