function reverse(array){
	var oldarr = array.concat();
	var newarr = [];
	for(let i = oldarr.length-1; i >=0; i--){

		newarr.push(oldarr[i]);
	}
	return newarr;
}


// function reverse(array){
// 	return array.map((val, id) => array[array.length-1-id])
// }