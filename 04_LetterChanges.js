function LetterChanges(str) { 
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      if (str.charCodeAt(i) == 122) 
        result += String.fromCharCode(97);
      else
        result += String.fromCharCode(str.charCodeAt(i)+1);
    }  
    else
      result += str[i];
  }
  return result.replace(/[aeiou]/g, function(p) {
    return p.toUpperCase();
  });  
}