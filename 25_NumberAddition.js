function NumberAddition(str) { 
  var result = str.match(/\d+/g);
  if (result)
    return result.map(Number).reduce(function (a,b) {
      return a + b;
    });   
  else  
    return 0;     
}