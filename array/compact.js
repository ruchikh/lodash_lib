function compact(array){
	return array.reduce((acc, v) =>{
		if(v){
			acc.push(v);
		}
		return acc;
	}, [])
}