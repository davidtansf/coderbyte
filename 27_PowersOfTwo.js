function PowersofTwo(num) { 
  var test = 2;
  while (test <= num){
    if (test == num)
      return true;
    else
      test *= 2;
  }
  return false;
}