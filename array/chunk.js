function chunk(array, size){
	var newarr = []
   return array.reduce((acc, v) => {
   	acc.push(array.splice(0, size))
   return acc;
   }, []);
   /*if(array.length <= size){
   	newarr.push(array);
   }*/
}
// return in array format