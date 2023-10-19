function compareArrays(arr1, arr2) {
	var isEqual = arr1.length === arr2.length &&
		arr1.every((value, index) => value === arr2[index])

	return isEqual;
}
//Первый способ
function getUsersNamesInAgeRange(users, gender) {

	return users.filter(user => user.gender === gender).map(user => user.age).reduce((summ, age, index, arr) => summ + age / arr.length, 0);
}

//Второй способ 
/*function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}
	const agesUsers = filteredUsers.map(user => user.age);
	const sumAges = agesUsers.reduce((sum, age) => sum + age);
	const avgAges = sumAges / filteredUsers.length
	return avgAges
}*/