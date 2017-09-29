var arr=[ 2,8,11,9,4,7,1,7,27];
var sum=0;
var product=1;
for(var i=0 ; i<arr.length; i++){
    sum +=arr[i]; 
    product *=arr[i]; 
}
console.log('sum of an integer array is : ' + sum);
console.log('product of an integer array is : ' + product);
