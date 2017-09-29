function addDashes(num){
 
  let strNum=num.toString();
  let result=strNum[0];
  let i=1;
  
  while(i < strNum.length){
    if(strNum[i]%2 == 0 && strNum[i-1]%2==0){
      result += '-' + strNum[i];
      i++;
    }
    else{
    result +=strNum[i];
      i++;
  }
  }
  return result;
} 
console.log(addDashes(256478426));
