
function drop(array, size = 1){
 var newarr = array.concat();
 newarr.splice(0, size)
 return	 newarr;
}