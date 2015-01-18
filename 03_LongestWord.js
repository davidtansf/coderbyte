function LongestWord(sen) { 
  var arr = sen.split(/[\W]+/);
  var bigWord = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > bigWord.length) {
      bigWord = arr[i]; 
    }  
  } 
return bigWord;
}

/* first attempt:

function LongestWord(sen) { 
  var arr = sen.split(/[!& ,.]+/);
  var bigNum = arr[arr.length - 1].length;
  for (var i = arr.length - 2; i >= 0; i--) {
    if (bigNum <= arr[i].length) {
      bigNum = arr[i].length;
    }  
  }
  for (var i = 0; i < arr.length;i++) {
    if (arr[i].length == bigNum) {
      return arr[i];
    }
  }
}
*/