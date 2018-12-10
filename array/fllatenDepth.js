function fllatenDepth(array, depth){
	if(depth == 0) return array
var a = array.reduce((acc, val) => { Array.isArray(val) ? val.forEach(b => acc.push(b)): acc.push(val)
		return acc;
	}, []);
depth--
return fllatenDepth(a, depth)
}
