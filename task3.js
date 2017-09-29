var res=[];
var j;
function last(input,numberOfElement){
   for (let i=input.length-1,j=0;j<numberOfElement;i--,j++){
       res[j]=input[i];
   }
   return Array.reverse(res);
}
console.log(last([1,2,3,4,5,4,5,5,7,9,0,4],5));
