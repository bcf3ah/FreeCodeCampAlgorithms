function uniteUnique(arr) {
	var result = [];
	var keys = Object.keys(arguments);

	for (var key in keys) {
		result.push(arguments[key]);
	}

	result = [].concat.apply([], result);
	return result.filter(function(item, i, self){
		return self.indexOf(item) === i;
	})
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
