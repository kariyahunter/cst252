/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

function sortingHat(str) {
	len = str.length;
	mod = len % 4;
	if (mod == 0) {
		return "Air"
	}
	else if (mod == 1) {
		return "Water"
	}
	else if (mod == 2) {
		return "Earth"
	}
	else if (mod == 3) {
		return "Fire"
	}
}

var button = document.getElementById("button");
var input = document.getElementById("input");


button.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var house = sortingHat(name);
	newText = "<p>You belong to the " + house + " tribe</p>";
	document.getElementById("output").innerHTML = newText;
})