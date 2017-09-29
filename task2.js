
var res=[];
function first(input,numberOfElement){
   for (let i=0;i<numberOfElement;i++){
       res[i]=input[i];
   }
   return res;
}
console.log(first([1,2,3,4,5],3));
