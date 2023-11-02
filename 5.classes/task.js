// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
		return this.state;
	}
	set state(number) {
		if (number < 0) {
			return this._state = 0;
		} else {
			if (number > 100) {
				return this._state = 100;
			} else {
				return this._state = number;
			}
		}
	}
	get state() {
		return this._state;



	}
}