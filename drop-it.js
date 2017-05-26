function dropElements(arr, func) {

	var newArr = arr.filter(func);

	var begin = arr.indexOf(newArr[0]);
	return arr.slice(begin);


}

console.log(dropElements([1, 2, 3], function(n) {return n > 1; }))
