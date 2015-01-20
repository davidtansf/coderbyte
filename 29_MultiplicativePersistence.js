function MultiplicativePersistence(num) { 
  var counter = 0;
  while(num.toString().length > 1) {
    num = num.toString().split("").reduce(function(a,b){
      return a * b;
    });
    counter += 1;
  }
  return counter;
}