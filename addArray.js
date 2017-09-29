var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
//var len=0;
var max=[]; 
var min=[];
var res=[];
if(array1.length<array2.length ){
  max=array2;
  min=array1;
}
else{
  max=array1;
  min=array2
}
//array1.length<array2.length ? len=array2.length : len=array1.length;
for(var i=0;i<max.length;i++){
  if(i<min.length){
  res[i] = max[i] + min[i];
  }
  else{
    res[i]=max[i]
  }
}
console.log(res);

