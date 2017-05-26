function findElement(arr, func) {
  var result = arr.filter(func);
	return result[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
