var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

function ageCheck(users){
users.filter((v, i) => {
	if(v.age < 40){
		return v;
	}
})
}



function find(collection, callback, fromIndex = 0){

}