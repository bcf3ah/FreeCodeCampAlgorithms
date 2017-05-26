function fearNotLetter(str) {
  var alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var strArr = str.split("");
  var begin = alphabetArr.findIndex(function(char){
		return char === strArr[0];
	});
	var newArr = alphabetArr.splice(begin, str.length);
	var result = undefined;
	newArr.forEach(function(char){
		if(strArr.indexOf(char) === -1){
			result = char;
		}
	})

	return result;
}

fearNotLetter("abcdefghijk");
