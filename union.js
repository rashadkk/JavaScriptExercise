function union(arr1,arr2){
var result=arr1;
  for(var i=0;i<=arr2.length-1;i++){
    if( ! result.includes(arr2[i])){
      result.push(arr2[i]);
    }
    }
  return result;
  }
console.log(union([1, 2, 3], [100, 2, 1, 10]));

