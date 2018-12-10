function repeat(string, n = 0){
	var repeatstring = '';
	for(let i=0; i< n; i++){
			repeatstring += string;
	}
	return repeatstring;
}


function repeatString(string, n = 0) {
  var repeatedString = "";
  while (n > 0) {
    repeatedString += string;
    n--;
  }
  return repeatedString;
}
