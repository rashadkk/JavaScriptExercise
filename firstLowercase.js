var output=[];
function firstToLower(str){
  var strpart=str.split(" ");
  //console.log(strpart);
  for(var i=0;i<strpart.length;i++){
    console.log('hai')
    output +=strpart[i].charAt(0).toLowerCase() + strpart[i].slice(1).toUpperCase() + ' ';
  }
  return output;
}
console.log(firstToLower('sogopi sjgios wgjtuioajw jkhjc'));
