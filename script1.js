"use strict";

/* SKRYPT ZLICZAJĄCY KLIKNIĘCIA W ELEMENT O ID "myBox" */

let myBoxEl = document.getElementById("myBox");
let clickCount = document.getElementById("clickCount");
let counter = 0;
myBoxEl.onclick = function() {
	counter++;
	clickCount.innerHTML = counter;
}