function SwapCase(str) { 
  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i]))
      output += str[i].toUpperCase();
    else if (/[A-Z]/.test(str[i]))
      output += str[i].toLowerCase();
    else
      output += str[i];
  }
  return output; 
}