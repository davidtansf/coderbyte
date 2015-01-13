// loops:

function SimpleAdding(num) { 
  var result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;       
}

/*

also recursion:

function SimpleAdding(num) {
  if (num === 1) {
    return num;
  }
  else {
    return num + SimpleAdding(num-1)
      }
  return num; 
         
}


*/
