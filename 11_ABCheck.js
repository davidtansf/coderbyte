function ABCheck(str) { 
  for (var i = 0; i < str.length - 4; i++) {
    if (str[i] == "a" && str[i+4] == "b")
      return true;
  }
  return false;
}

/* Using regular expressions:

function ABCheck(str) { 
  return /a...b/g.test(str);
}

*/