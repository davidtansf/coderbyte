function FirstReverse(str) { 
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
  result += str[i];
  }
  return result;
};

console.log(FirstReverse("Argument goes here"));