var arr=[ 2,8,11,9,4,7,0,7,27];
function sqr(x){
  return x*x;
}
var sum=0;
for(var i=0 ; i<arr.length; i++){
    sum +=sqr(arr[i]); 
}
console.log('sum of square of an number vector is : ' + sum);
