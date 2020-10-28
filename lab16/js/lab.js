/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

$("#content").append("<button id='button'>Click Me!")

$("#button").click(function(){
	alert("You're pretty :)");
})

$("#button").click(function(){
	$("button").addClass("green");
})