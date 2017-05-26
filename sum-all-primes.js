function sumPrimes(num) {

	function isPrime(num){
		var isPrime = true;
		for (var i = 2; i<num; i++){
			if(num % i === 0){
				isPrime = false;
			}
		}
		return isPrime;
	}

	var sum = 2;
	for (var j = 3; j <= num; j+=2){
		if(isPrime(j)){
			sum += j;
		}
	}

	return sum;
}

console.log(sumPrimes(977));
