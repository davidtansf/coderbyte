function ArithGeo(arr) { 
  var add = arr[1] - arr[0];
  var mult = arr[1] / arr[0];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] + add != arr[i+1]) {
      for (j = 1; j < arr.length - 1; j++) {
        if (arr[j] * mult != arr[j+1])
          return -1;
        else
          return "Geometric";
      }
    } 
  }  
  return "Arithmetic";
}