function VowelCount(str) { 
var count = 0;
for (var i = 0; i < str.length; i++) {
  if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
    count += 1;
  }    
}
return count;
}

/* Other solution using regular expressions:

function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/ig);
  return vowels.length;
}

*/