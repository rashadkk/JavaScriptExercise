var result=[];

function flatten(arr){
   for(var i=0;i<arr.length;i++){
     
     if(Array.isArray(arr[i]))
      {
            flatten(arr[i]);
      }
    else{
     
      result.push(arr[i]);
  }
}
  return result;
}
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
