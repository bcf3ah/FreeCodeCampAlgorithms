function convertToRoman(num) {
	var arr = (""+num).split("").map(function(n){ return parseInt(n);}).reverse();
	var numerals = [
		['I', 'V', 'X'],
		['X', 'L', 'C'],
		['C', 'D', 'M'],
		['M', '', '']
	];
	var result = [];

	function parser(n, a, b, c) {
		if(n===0){
			result.unshift('');
		} else if (n<4) {
			result.unshift(a.repeat(n));
		} else if (n===4) {
			result.unshift(a+b);
		} else if (n===5) {
			result.unshift(b);
		} else if (n>5 && n<9) {
			n = n-5;
			result.unshift(b+a.repeat(n));
		} else {
			result.unshift(a+c);
		}
	}

	arr.forEach(function(val, i){
		var x;
		i > 3 ? x = 3 : x = i;
		parser(arr[i], numerals[x][0], numerals[x][1], numerals[x][2])
	})

	return result.join("");
}

console.log(convertToRoman(1023));
