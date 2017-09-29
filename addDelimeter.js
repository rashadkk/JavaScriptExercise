var result='';
function addDelimiter(arr,delimiter){
  for(var i=0;i<=arr.length-1;i++){
    if(i != arr.length-1){
   result += arr[i] + delimiter;
    }
    else{
      result += arr[i];
    }
  }
  return result;
}
console.log(addDelimiter(['asfsdfg','sdgsg','sgasgs'],'|'));
