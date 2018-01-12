class Util {

	round(number, min) {
		number = Math.floor(number)
		if (min != undefined && number < min) number = min
		return number
	}

	randomItemFrom(array) {
		return array[Math.floor(Math.random() * array.length)]
	}

}

export default new Util