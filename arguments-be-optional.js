function addTogether() {
	if(typeof arguments[0] !== 'number'){
		return undefined;
	}

  if (arguments.length>1){
		if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
			return arguments[0]+arguments[1];
		} else {
			return undefined;
		}
	}

	var a = arguments[0];
	return function(){
		if(typeof arguments[0] === 'number'){
			return a + arguments[0];
		} else {
			return undefined;
		}
	}
}

//console.log(addTogether(2, 3));
// addTogether(2, 3) should return 5.
var result = addTogether(4)(3);
console.log(result);
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.
