color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","purple","black","white","majanta","pink","ivory","grey"];
o = ["th","st","nd","rd"];
for(var i=0;i<=color.length;i++)
{ 
    if(i==0){
      continue;
    }
   
    if(i>=11 && i<=13)
      {
        console.log(i + o[0] + ' Choice is : ' + color[i-1]);
        continue;
      }
   if(i%10==1 || i%10==2 || i%10==3 ){
       console.log(i + o[i] + ' Choice is : ' + color[i-1]);
    }
    else{
      console.log(i + o[0] + ' Choice is : ' + color[i-1]);
    }    
}
