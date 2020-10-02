/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/


var button = document.getElementById("button");
var input = document.getElementById("input");


button.addEventListener("click", function() {
	inputValue = document.getElementById("myinput").value;
    document.writeln("Your name is probably:", inputValue);
});


