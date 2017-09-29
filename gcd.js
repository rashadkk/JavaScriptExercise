// function gcd(num1,num2){
//   var max;
//   var GCD;
//   num1<num2 ? max=num2:max=num1;
//   for(var i=0;i<=max;i++){
//   if(num1%i==0 && num2%i==0){
//     GCD=i;
//   }
//   }
//   console.log(GCD);
// }
// gcd(185,30);
  
function gcd(num1,num2){
  while(num1 !=num2){
    if(num1>num2){
      return gcd(num1-num2,num2);
    }
    else{
      return gcd(num1,num2-num1);
    }
  }
  return num1;
}
console.log(gcd(185,30));