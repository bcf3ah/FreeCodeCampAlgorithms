function pairwise(arr, arg) {
		if(arr.length<2){
			return 0;
		}
  	var indices = [];
		arr.forEach(function(num, i, self){
			var nextNum = arg-num;
			var nextIndex = self.indexOf(nextNum);
			if(nextIndex === i){
				return;
			}
			if(indices.indexOf(nextIndex) !== -1){
					var startSearchHere = nextIndex+1;
					nextIndex = self.indexOf(nextNum, startSearchHere);
			};
			if(nextIndex !== -1 && indices.indexOf(nextIndex) === -1){
				indices.push(i, nextIndex);
			}
		})
		return indices.reduce(function(acc, cur){
			return acc+cur;
		})
}

console.log(pairwise([1,4,2,3,0,5, 7, 0, 4, 5, 2, 3, 4, 6, 4, 7, 4, 2, 1, 0, 7, 6, 4, 3], 7));
