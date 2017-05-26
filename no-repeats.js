function permAlone(str) {

	function findPermutation(str){
		if( str.length === 1){
			return str;
		}
		var permutations = [];
		for (var i = 0; i<str.length; i++){
			var substr = str.slice(0,i) + str.slice(i+1, str.length);
			for (var nextPerm of findPermutation(substr)){
				permutations.push(str[i] + nextPerm);
			}
		}

		return permutations;
	}

	var arr = findPermutation(str);
	var result = arr.filter(function(str, i){
		return (!/([a-z])\1+/.test(str));
	})
	return result.length;

}

console.log(permAlone('aab'));
