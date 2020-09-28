/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

// finding output and assigning variable
var outputEl = document.getElementById("output");

// creating first element
var new1El = document.createElement("p");

new1El.innerHTML = "This is my first new element";

// creating second element
var new2El = document.createElement("p");

new2El.innerHTML = "This is my second new element";

// appening new elements to body
document.body.appendChild(new1El)

document.body.appendChild(new2El)


// changing css attributes
document.getElementById("content").style.backgroundColor = "white";

document.getElementById("img").style.dropShadow = "10px 10px black"

document.getElementById("p").style.color = "peachpuff";
