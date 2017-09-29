

function is_array(input){
   if(Array.isArray(input)){
   	return true;
   }
   else{
   		return false;
   }
}
console.log(is_array('wslfsg'));
console.log(is_array([3,2,5,8]));
