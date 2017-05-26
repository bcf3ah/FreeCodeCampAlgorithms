function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	return arr.map(function(obj){
		var orbitalPeriod = 2*Math.PI*Math.pow((Math.pow(earthRadius+obj.avgAlt, 3)/GM), 0.5);
		delete obj.avgAlt;
		obj.orbitalPeriod = Math.round(orbitalPeriod);
		return obj;
	});
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
