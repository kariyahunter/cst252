// sortUserName - a function that takes user input and sorts the letters
function sortUserName() {
  var userName = window.prompt("Please write your name!");
  console.log("userName =", userName);

  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =" + nameSorted);
  return nameSorted;
}

//Output
document.writeln("Here's your new name!",
  sortUserName(), "</br>");
