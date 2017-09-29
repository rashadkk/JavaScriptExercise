var array=[3,8,7,6,7,5,-4,-3,2,1];
for(var i=0;i<array.length;i++)
{
  for(var j=0;j<array.length;j++)
    {
       if(array[i] < array[j])
       {
         var x=array[i]
         array[i]=array[j];
         array[j]=x;
       }
    }
}
console.log(array);
