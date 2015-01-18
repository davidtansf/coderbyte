function PrimeTime(num) { 
  if (num <= 1) 
    return false;
  for (var i = 2; i < num/2; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}