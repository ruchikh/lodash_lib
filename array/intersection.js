function intersection(...array){
	return array.reduce((arr1, arr2) => {
		return arr1.filter(v => {
			return arr2.includes(v)
		})
	})
}

let i1 = intersection([2, 1, 3], [4, 10, 2, 1])
console.log(i1);