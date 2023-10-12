function getArrayParams(...arr) {
	let min = getArrayParams[0];
	let max = getArrayParams[0];
	let sum;
	getArrayParams(5, 1, 0, 56, 43, 7, 9);
	for (let i = 0; i < arr.length; i++) {
		if ((getArrayParams[i]) < min) {
			min = getArrayParams[i];
		}
		console.log(arr[min]);

		for (let i = 0; i < arr.length; i++) {
			if ((getArrayParams[i]) >= max) {
				max = getArrayParams[i];
			}
			console.log(arr[max]);

			for (let i = 0; i < arr.length; i++) {
				sum = +getArrayParams[i];
			}
			console.log(arr[max]);
			return {
				min: min,
				max: max,
				avg: avg
			};

		}
	}

}



function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
