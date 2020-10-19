/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model; 
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return("Make:" + this.make + "<br>" +
    	   "Model:" + this.model + "<br>" +
    	   "Year:" + this.year + "<br>" +
    	   "Color:" + this.color + "<br>" +
    	   "Extras:" + this.extras); 
  }
}

var honda = new Vehicle("Honda", "Accord", "1998", "White", "Bucket");
honda.info();

var nissan = new Vehicle("Nissan", "Rogue", "2017", "Grey", "Not a bucket");
nissan.info();

document.getElementById("output").innerHTML += "<p>" + honda.info() + "</p>";

document.getElementById("output").innerHTML += "<p>" + nissan.info() + "</p>";