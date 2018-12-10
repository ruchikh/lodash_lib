function pull(array, ...value){
	return array.filter(v => !value.includes(v))
	}


function pullAll(array, value){
	return array.filter(v => !value.includes(v))
}


function slice(array, start = 0, end = array.length){
	return array.slice(start, end)
}

function sortedIndex(array, value){
	var sort = 	array.reduce((acc, v, index) => {
			if(value == array[array.length -1]) acc.push(v);
			if(value >= array[index] && value <= array[index + 1]) acc.push(v);
			return acc;
		}, [])
	return array.indexOf(sort[0]);
}



function remove(array){
	var newarr = [];
	array.splice(0, array.length).forEach(v => {	
		if(v) {
			if(v % 2 == 0){
		newarr.push(v);
		}else{
			array.push(v)
		}
		}	
	})
	return newarr
}
// return array;


function sortedIndexOf(array, value){
	return array.indexOf(value)
}

function sortedLastIndexOf(array, value){
	return array.lastIndexOf(value)
}


function sortedUniq(array){
	return array.sort().reduce((acc, val) => {
		let curr = acc.length;
		if(curr === 0 || acc[length -1] !== val){
			acc.push(val)
		}
		return acc;
	}, [])
}



// Arguments
// array (Array): The array to query.
// Returns
// (Array): Returns the slice of array.

function tail(array){
	return array.slice(1, array.length)
}


function take(array, n = 1){
	return array.slice().reduce((acc, val) =>{
		acc.push(val)
		retu rn acc;
	}, [])
}