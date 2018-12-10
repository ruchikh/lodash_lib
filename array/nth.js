function nth(array, n = 0){
	if(n < 0){
		return array[array.length-(-n) ] 
	}
	return array[n]
	// return array[index]
};