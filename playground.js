// var result = /\babcd\b/.test("abcd");
// result = /hello|world/.test("world");
//
// result = "waddup".replace(/[au]/g, "d");
//
// result = 'cia and fbi'.replace(/(cia|fbi)/g, function(str){
// 	return str.toUpperCase();
// })
//
// var result = '';
// arr.forEach(function(key, i, self){
// 	Object.keys(conversion2).findIndex(key);
//
// });
//
//
// console.log(result);

// var swap = function (array, pos1, pos2) {
//   var temp = array[pos1];
//   array[pos1] = array[pos2];
//   array[pos2] = temp;
// };
//
// var heapsPermute = function (array, n) {
//   n = n || array.length; // set n default to array.length
//   if (n === 1) {
//     console.log(array.join(""));
//   } else {
//     for (var i = 1; i <= n; i += 1) {
//       heapsPermute(array, n - 1);
//       if (n % 2) {
//         var j = 1;
//       } else {
//         var j = i;
//       }
//       swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
//     }
//   }
// };
//
// heapsPermute(['a', 'b', 'c', 'd']);


// function pairwise(arr, arg) {
//  // Set sum of indices to zero
//  var sum = 0;
//  // make a local copy of the arguments object so we don't modify it directly
//  var pairArr = arr.slice();
//  // looping from first element
//  for(i = 0; i < pairArr.length; i++) {
//    //Looping from second element by setting first element  constant
//    for(j = i + 1; j < pairArr.length; j++) {
//      // Check whether the sum is equal to arg
//      if(pairArr[i] + pairArr[j] == arg) {
//        //Add the indices
//        sum += i + j;
//        //Set the indices to NaN so that they can't be used in next iteration
//        pairArr[i] = pairArr[j] = NaN;
//      }
//    }
//  }
//  return sum;
// }
//
// // test here
// console.log(pairwise([1,4,2,3,0,5, 7, 0, 4, 5, 2, 3, 4, 6, 4, 7, 4, 2,1, 0, 7, 6, 4, 3], 7));

// function pairwise(arr, arg) {
//   // search array for elements that when paired, equal the second argument, then sum their indices
//   // make a local copy of the arguments object so we don't modify it directly
//   var pairArr = arr.slice();
//   return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
//       var search = arg - b; // get difference of current item so we know what value will sum to arg
//
//       // check if search value in rest of the array, but also make sure it doesn't match current search index
//       if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){
//          var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
//          pairArr.splice(index,1,NaN); // remove current index from the array
//          pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
//          return a + total; //return the running total back to reduce for next item
//       }
//       return a; // simply return previous total if no operations needed
//   },0);
//
// }
//
// // test here
// console.log(pairwise([1,4,2,3,0,5, 7, 0, 4, 5, 2, 3, 4, 6, 4, 7, 4, 2,1, 0, 7, 6, 4, 3], 7));
// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}

// test here
var hey = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(hey);
