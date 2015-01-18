function NumberSearch(str) { 
  var arrN = str.match(/\d/g).map(Number);
  var arrS = str.match(/[a-z]/gi);
  var result = 0;
  for (var i = 0; i < arrN.length; i++) {
    result += arrN[i];
  }
  return Math.round(result / arrS.length);       
}

console.log(NumberSearch("H3ello9-9"));