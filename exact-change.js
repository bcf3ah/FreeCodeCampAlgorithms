function checkCashRegister(price, cash, cid) {
	var change = cash-price;
	var totalCash = 0;
	cid.forEach(function(item){
		totalCash+=item[1]
	});
	totalCash = Math.round(totalCash*100)/100;

	if(change === totalCash){
		return 'Closed';
	}


	var currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
	var currencyName = {
		100: 'ONE HUNDRED',
		20: 'TWENTY',
		10: 'TEN',
		5: 'FIVE',
		1: 'ONE',
		0.25: 'QUARTER',
		0.1: 'DIME',
		0.05: 'NICKEL',
		0.01: 'PENNY'
	}

	var ref = {};
	cid.forEach(function(item){
			ref[item[0]] = item[1];
	});

	if(change>totalCash){
		return 'Insufficient Funds';
	}

	var result = [];
	var insufficientFunds = '';
	var index = 0;
	function checkChange(change, index){
				if(change === 0){
					return;
				}

				var div = change/currencies[index];
				var name = currencyName[currencies[index]];
				if(div > 1){
					if(ref[name]<change){
						var remainder = +((change-ref[name]).toFixed(2));
						var amount = ref[name].toFixed(2);
						if(+amount === 0){
							insufficientFunds += 'Insufficient Funds';
							return;
						}
						result.push([name, +amount]);
						index++;
						checkChange(remainder, index);
					} else if (ref[name]>=change) {
						var remainder = +((change - (currencies[index]*Math.floor(div))).toFixed(2));
						var amount = (currencies[index]*Math.floor(div)).toFixed(2);
						if(+amount === 0){
							insufficientFunds += 'Insufficient Funds';
							return;
						};
						result.push([name, +amount]);
						checkChange(remainder, index);
					}
				} else {
					index++;
					checkChange(change, index);
				}

		if(insufficientFunds){
			return insufficientFunds;
		} else {
			return result;
		}

	}

	return checkChange(change, index);


}

var check = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(check);
