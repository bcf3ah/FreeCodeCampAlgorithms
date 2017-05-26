function steamrollArray(arr) {
  var result = [];

	function mapper(arr){
		arr.forEach(function(item){
			if(!Array.isArray(item)){
				return result.push(item);
			}
			mapper(item);
		});
	}

	mapper(arr);
	return result;
}

console.log(steamrollArray([1, {}, 3, 4]));
