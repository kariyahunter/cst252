/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
 */

  // Define Variables
  myTransport = ["Honda Accord", "moms car"
  ];

  myMainRide = {
    make: "Honda",
    model: "Accord",
    color: "White",
    year: 1998,
    age: function() {
      return 2020 - age;
    }
  }

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
