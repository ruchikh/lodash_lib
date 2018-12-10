function fllatenDeep(array){
return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(fllatenDeep(val)) : acc.concat(val), []);
}
