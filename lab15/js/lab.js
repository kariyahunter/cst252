/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

class Car {
	constructor(make, model, year, color, extras) {
		this.carmake = make;
		this.carmodel = model;
		this.caryear = year;
		this.carcolor = color;
		this.carextras = extras;
	}

	info() {
		return "Make:" + " " + this.carmake + "<br>" +
    	  	 "Model:" + " " + this.carmodel + "<br>" +
    	  	 "Year:" + " " + this.caryear + "<br>" +
    	   	 "Color:" + " " + this.carcolor + "<br>" +
    	  	 "Extras:" + " " + this.carextras; 
	}
}

var honda = new Car("Honda", "Accord", "1998", "White", "Bucket");
honda.info();

var nissan = new Car("Nissan", "Rogue", "2017", "Grey", "Not a bucket");
nissan.info();

document.getElementById("output").innerHTML += "<p>" + honda.info() + "</p>";

document.getElementById("output").innerHTML += "<p>" + nissan.info() + "</p>";