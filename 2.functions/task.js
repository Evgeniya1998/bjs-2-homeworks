//Вариант 1 решения задач
//Задача №1
function getArrayParams(...arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let sum = arr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	}, 0);
	let avg = ((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg:Number (avg)
	};
}
//Задача №2
function summElementsWorker(...arr) {
	let sum = arr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	}, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let differenceMaxMin;
	if (arr.length === 0) {
		differenceMaxMin = 0;
	} else {
		differenceMaxMin = max - min
	}
	return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  sumEvenElement = 0;
  sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i]
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++
    }
  }
  if (countEvenElement === 0)
    return 0;
  return (sumEvenElement / countEvenElement);
}

//Задача №3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	if (arrOfArr.length === 0) {
		maxWorkerResult = 0;
	} else {
		for (i = 0; i < arrOfArr.length; i++) {
			const result = func(...arrOfArr[i]);
			if (result > maxWorkerResult) {
				maxWorkerResult = result;
			}
		}
	}
	return maxWorkerResult;
}



//Примеры 
console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)) // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)) // { min: 5, max: 5, avg: 5 }
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 =>  328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72