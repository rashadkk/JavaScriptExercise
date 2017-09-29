function diffrence(arr1,arr2){
 var result=[];
  for(var i=0;i<=arr1.length-1;i++){
    if( ! arr2.includes(arr1[i])){
      result.push(arr1[i]);
    }
  }
    for(var i=0;i<=arr2.length-1;i++){
    if( ! arr1.includes(arr2[i])){
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(...diffrence([1, 2, 3], [100, 2, 1, 10]));
