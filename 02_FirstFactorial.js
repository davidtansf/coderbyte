function FirstFactorial(num) { 
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;       
}

console.log(FirstFactorial(6));

/* Slight upgrade (saves one loop by setting i = 2):

function FirstFactorial(num) { 

  var res = 1;
  for (var i = 2; i <= num; i++) {
    res *= i;
  }

*/
