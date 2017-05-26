function smallestCommons(arr) {
  arr = arr.sort(function(a, b){
		return a-b;
	});

	for (var i = (arr[0]+1); i<arr[1]; i++){
		arr.push(i);
	}

	arr = arr.sort(function(a, b){
		return b-a;
	});


	function gcd(a, b){
			if (b === 0){
				return a;
			}
			return gcd(b, (a % b));
	}

	function lcm(a, b){
		return (a*b)/(gcd(a, b));
	}

	function lcmRecursive(arr){
		if(arr.length === 2){
			return lcm(arr[0], arr[1]);
		} else {
			var arg0 = arr[0];
			arr.shift();
			return lcm(arg0, lcmRecursive(arr));
		}
	}

	return lcmRecursive(arr);

}


console.log(smallestCommons([1, 13]));
