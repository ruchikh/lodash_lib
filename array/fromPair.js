
function fromPair(array){
	return array.reduce((acc, v) => {
acc[v[0]] = v[1];
return acc
	},{})
}
