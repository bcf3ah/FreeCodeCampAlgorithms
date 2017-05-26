function updateInventory(arr1, arr2) {
		var ref = {};
		var mergedArr = arr1.concat(arr2);
		mergedArr.forEach(function(subArr){
			if(ref.hasOwnProperty(subArr[1])){
				var prev = ref[subArr[1]];
				var next = subArr[0];
				ref[subArr[1]] = prev+next;
			} else {
				ref[subArr[1]] = subArr[0];
			}
		});
		var result = [];
		Object.keys(ref).sort().forEach(function(item){
			var temp = [ref[item], item];
			result.push(temp);
		});
		return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
