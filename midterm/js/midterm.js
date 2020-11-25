/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: Nov 1, 2020
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/


$(".thing1").hover(
  function(){
    $(".metabox").css("visibility", "visible")
  },
    function(){
    $(".metabox").css("visibility", "hidden")
  }
)

$(".hoverable").hover(
  function(event){
    console.log(event)
    $("p#" + event.currentTarget.id).css("visibility", "visible")
  },
    function(event){
    $("p#" + event.currentTarget.id).css("visibility", "hidden")
  }
)