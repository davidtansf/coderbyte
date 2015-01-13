// Didn't get mode, sought outside resources

function MeanMode(arr) { 
    var modeMap = {};
    var mode = arr[0]; 
    var maxCount = 1;
    for(var i = 0; i < arr.length; i++)
    {
    	var el = arr[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		mode = el;
    		maxCount = modeMap[el];
    	}
    }
    var meanTop = 0;
    var meanBot = arr.length;
  for(var i = 0; i < arr.length; i++){
    meanTop += arr[i];
  }
    var mean = meanTop / meanBot;
    if (mode == mean)
      return 1;
    else
      return 0;
}