var arr=['hai','hey','hai','hello','hey','hello','hello'];
for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr.length;++j){
    if(i != j)
    {
        if(arr[i]===arr[j]){
          arr.splice(j,1);
    }
    }
  }
}
console.log(arr);
