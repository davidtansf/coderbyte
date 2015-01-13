function CheckNums(num1,num2) { 
  if (num2 > num1) 
    return true;
  else if (num1 > num2)
    return false;
  else
    return -1;
}

/* Other solution 1

function CheckNums(num1,num2) { 

  if (num1 === num2) return -1;
  return num2 > num1; 
         
}

*/

/* Other solution 2

function CheckNums(num1,num2) { 

  return num2 == num1 ? -1 : num2 > num1; 
              
}
  
*/