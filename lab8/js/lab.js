/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
 */

function firstThing(test) {
	console.log(test + ": Thing 1:<br>")
}

function secondThing(test) {
	console.log(test + ":Thing 2:<br>")

function thirdThing(test) {
	console.log(test + ":Thing 3:<br>")
}

// test 1 - calling the three functions
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// test 2 - calling the three functions using setTimeout
setTimeout(function() {
	firstThing("TEST 2");
}, 0);
setTimeout(function() {
	secondThing("TEST 2");
}, 0);
setTimeout(function() {
	thirdThing("TEST 2");
}, 0);

// test 3 - changing order to 2, 3, 1
setTimeout(function() {
	firstThing("TEST 3");
}, 3000);
setTimeout(function() {
	secondThing("TEST 3");
}, 1000);
setTimeout(function() {
	thirdThing("TEST 3");
}, 2000);
}
