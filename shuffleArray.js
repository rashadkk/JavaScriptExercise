var arr=[1,3,5,8,4,6,4,7,5,6,4,5,7,];
function shuffle(array){
  for(var i=0;i<=10;i++){
    array[i]=array[Math.floor(Math.random()*array.length)];
  }
  console.log('Shuffled array is : '+ array);
}
shuffle(arr);