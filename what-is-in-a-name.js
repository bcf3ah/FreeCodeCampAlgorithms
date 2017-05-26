function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
	collection.forEach(function(obj){
		var localArr = [];
		console.log(obj);
		for (sourceItem in source){
			var key = sourceItem;
			var value = source[key];
			console.log('Source: ' , "{" + key + ":" + value + "}");

			if(!obj.hasOwnProperty(key)){
				return null;
			}

			for (var prop in obj){
				if(obj[prop] === value){
					localArr.push(obj);
				} else {

				}
			}
			console.log('Final local array: ', localArr);
		}
		if(localArr[0]){
			arr.push(localArr[0]);
		}
		console.log('Final arr: ', arr);
		console.log('=======================');
	});
  // Only change code above this line
  return arr;
}

var result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log('FINAL RESULT ', result);
