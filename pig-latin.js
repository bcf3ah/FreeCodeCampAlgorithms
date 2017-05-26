function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

	if(str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('o') || str.startsWith('u')){
		return str+'way';
	} else {
		var arr = str.split("");
		var begin = arr.findIndex(function(char){
			return vowels.indexOf(char) !== -1
		});
		var chunk = str.substring(0, begin);
		return str.substr(begin)+chunk+"ay";
	}

}

var result = translatePigLatin("consonant");
console.log(result);
