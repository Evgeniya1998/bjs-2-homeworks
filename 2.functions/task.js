function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum+=arr[i];
	}
	const avg = ((sum / arr.length).toFixed(2));


	return {
		min: min,
		max: max,
		avg: Number(avg)
	};

}
console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));


function summElementsWorker(...arr) {
  for (let i = 0; i < arr.length; i++) {
		sum = +arr[i];
	}
	const avg = Number((sum / arr.length).toFixed(2));


	return {
		sum: sum
	};


}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
