function without(array, ...value){
	return array.filter(v => !value.includes(v))
	}