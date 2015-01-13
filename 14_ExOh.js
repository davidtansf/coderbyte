function ExOh(str) { 
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      countX++;
    }
    if (str[i] == "o") {
      countO++;
    }
  }
  return countX === countO;
}

/* Solution using regular expression:

function ExOh(str) {  
  return str.split(/x/i).length === str.split(/o/i).length; 
         
}

*/