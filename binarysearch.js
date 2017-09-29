var arr=[1,2,4,5,6,8,9,11,15,16,25,29,35];
var low=0;
var high=arr.length-1;
//var mid=parseInt((low +high)/2);
function binarySearch(key){
 while(low<=high){ 
   mid=parseInt((low+high)/2);
  if(key==arr[mid]){
    return key + ' is found at position :' + (mid+1);
  }
   else{
      if(key < arr[mid]){
          high=mid-1;         
         }
      else{
         low=mid+1;     
      }
  }
}
  return 'not found';
}
console.log(binarySearch(1));
