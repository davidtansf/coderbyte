function WordCount(str) { 
  var arr = str.split(/[ ]+/);
  var count = arr.length;
  return count;
}

/* Other solution:

function WordCount(str) {  
  return str.split(' ').length;         
}

*/