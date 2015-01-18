function SimpleSymbols(str) { 
  if (/[a-z]/.test(str[0]) || /[a-z]/.test(str[str.length-1]))
    return false;
  for (var i = 1; i < str.length - 1; i++) {
    if (/[a-z]/.test(str[i])) {
      if(str[i-1] != "+" || str[i+1] != "+") {
        return false;
      }
    }
  }  
  return true;  
}