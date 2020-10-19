/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

for (i=1; i <= 200; i++) {
 	if (i%15 == 0) {
 		console.log("FizzBuzz");
 }
 	if (i%21 == 0) {
 		console.log("FizzBoom");
 }
 	if (i%35 == 0) {
 		console.log("BuzzBoom");
 }
 	if (i%105 == 0) {
 		console.log("FizzBuzzBoom");
 }
	 } if (i%3 == 0) {
 		console.log("Fizz");
 	 } else if (i%5 == 0) {
 		console.log("Buzz");
 	 } else if (i%7 == 0) {
 		console.log("Boom");
	 } else {
		console.log(i);
	 } 
