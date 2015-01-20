function DashInsert(str) {
  str = str.toString();
  var output = '';
  for (var i = 0; i < str.length - 1; i++) {
    if (Number(str[i]) % 2 == 1 && Number(str[i+1]) % 2 == 1)
      output += str[i] + "-";
    else
      output += str[i];
  }
  output += str[str.length - 1];
  return output;
}