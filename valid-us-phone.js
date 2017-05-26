function telephoneCheck(str) {
	if(!/\d|\(/.test(str[0])){
      return false;
  }

	var arr = str.split("");
	var count = 0;
	arr.forEach(function(char){
		if (char === '(' || char === ')'){
			count++;
		}
	})
	if(count === 1 || count > 2){
		return false;
	}

	arr = arr.filter(function(item){
		return /\d/.test(item);
	});

	if(arr.length > 10 && arr[0] != '1'){
		return false;
	} else if (arr.length > 10 && arr[0] == '1'){
		var pattern = /1 ?(\(?\d{3}\)?)[ -]?\d{3}[ -]\d{4}/;
		return pattern.test(str);
	} else {
		var pattern2 = /(\(?\d{3}\)?)[ -]?\d{3}[ -]?\d{4}$/;
		return pattern2.test(str);
	}
}



console.log(telephoneCheck("1 (555-555-5555"));

//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
