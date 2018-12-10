function dropRight(array, size = 1){
	var newarr = array.concat();
	return newarr.splice(0, newarr.length - size)
}