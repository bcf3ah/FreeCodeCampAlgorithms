function myReplace(str, before, after) {

		if(before.substr(0, 1) === before.substr(0, 1).toUpperCase()){
			after = after.replace(after[0], after[0].toUpperCase());
		} else {
	    after = after.replace(after[0], after[0].toLowerCase());
	  }

    var arr = str.split(" ");
    var index = arr.indexOf(before);
    arr.splice(index, 1, after);
    return arr.join(" ");
}

var result = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


console.log(result);
