var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var repeatation=[];
for(var i=0;i<arr.length;i++){
  var count=0;
  for(var j=0;j<arr.length;j++){
    if(arr[i]===arr[j]){
      count++;
    }
  }
  repeatation[i]=count;
}
var maxrep=Math.max(...repeatation);
var pos= repeatation.indexOf(maxrep);
//console.log(pos);
//console.log(repeatation);
console.log(arr[x] + ' ('+ maxrep +' Times )');
