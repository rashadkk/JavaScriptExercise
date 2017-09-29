var arr=['hai','hey','hai','hi','hello','hey','hello','hello'];
var duplicate=[];
for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr.length;++j){
    if(i != j)
    {
        if(arr[i] === arr[j]){
          if( ! duplicate.includes(arr[j]))
          {
            duplicate.push(arr[j]);
          }
    }
    }
  }
}
console.log('duplicated value is : '+ duplicate );
