endpoint="https://api.kanye.rest"

$("#button").click(function(){
	$.ajax({
   // The URL for the request
 url: endpoint,
 // The data to send (will be converted to a query string)
 data: { id: 123},
 // Whether this is a POST or GET request
 type: "GET",
 // The type of data we expect back
 dataType : "json",
  })
// If the request succeeds
.done(function( data ) {
 //alert("Success!");
 var quote = data.quote;
 $("#output").append("<p>" + quote)
})
// If the request fails
.fail(function( xhr, status, errorThrown ) {
 console.log(errorThrown + " Status:" + status );
});
})