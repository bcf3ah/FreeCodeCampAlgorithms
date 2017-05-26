function sumFibs(num) {
	if(num <= 2){
		return 1;
	}

	var arr = [1];
	var count = 1;
	var i = 0;
	while(count<=num){
		arr.push(count);
		count += arr[i];
		i++;
	}

	arr = arr.filter(function(val){
		return (val % 2 != 0);
	})

	return arr.reduce(function(acc, current){
		return acc + current;
	})
}

console.log(sumFibs(75025));
