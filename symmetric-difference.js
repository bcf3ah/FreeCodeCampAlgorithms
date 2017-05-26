function sym(args) {
	var arr = [];
	for (let item of arguments){
		var temp = item.filter(function(num, i, self){
			return self.indexOf(num) === i;
		})
		arr.push(temp);
	};

  return arr.reduce(function(a, b){
		var c = a.concat(b);
		return c.filter(function(num, i, self){
			return self.indexOf(num) === self.lastIndexOf(num);
		})
	}).sort(function(a, b){
		return a-b;
	})
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
