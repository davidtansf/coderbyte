function AlphabetSoup(str) { 
  var arr = str.split("").sort().join("");
  return arr;
}