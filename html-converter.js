function convertHTML(str) {
  var pattern = /[&<>"']/g;
	var matcher = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;"
	}

  var converter = function(str){
      str = matcher[str];
			return str;
  };

	return str.replace(pattern, converter);
}

console.log(convertHTML("Dolce & Gabbana"));
