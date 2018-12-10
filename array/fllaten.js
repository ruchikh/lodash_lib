
function fllaten(array){
return array.reduce((acc, val) => acc.concat(val), []);
}

var p1 = fllaten([1, 2, [3, [4], 5]]);
console.log(p1)




