function TimeConvert(num) { 
  var hour = Math.floor(num/60);
  var min = num % 60;
  if (min < 10)
    return hour + ":0" + min;
  return hour + ":" + min; 
}