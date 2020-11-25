/*
 *  Author: Kariya Hunter <karhunter@csumb.edu>
 * Created: 14 September
 * Licence: Public Domain
*/

var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "/info.0.json";

function getComic(num) {
	if (typeof num === 'undefined') {
		numStr = "";
	} else {
		numStr = num.toString() + "/";
	}
var ourURL = URLpre + num + URLpost;


$.ajax({

 url: URL,

 type: "GET",
})

.done(function( data ) {

var imageUrl = data.img;
var title = data.title;
var alt = data.alt; 
var comicNum = data.num
var html = `
      <div id="imageblock">
        <h2>${title}</h2>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>
    `
    $("#xkcd").append(html);

    $("prev").click(function(){
    	getComic(comicNum - 1);
    });

    $("next").click(function(){
    	getComic(comicNum + 1);
    });

})

}

getComic();



	
