function isLeap(startYear,endYear){
 for(var i=startYear;i<=endYear;i++)
 {
    if(i%100==0)
      {
       if(i%400==0){
       console.log(i);}
      }
     else if(i%4==0){
       console.log(i);
     }
  }
 }

isLeap(2680,2710);
