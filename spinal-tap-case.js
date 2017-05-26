
function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	str = str.toLowerCase();
	str = str.replace(/([a-z])([^a-z])/g, "$1-");
	return str;
}

console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('AllThe-small Things'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('this-is-spinal-tap'));
console.log(spinalCase('Teletubbies say Eh-oh'));
