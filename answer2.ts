let array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const findOdds = (array: Array<number>): Array<number> => {
		let newArray: Array<number> = []
		for (let i: number = 0; i < array.length; i++){
			if (i % 3 == 0) {
				newArray.push(array.shift())
				console.log(newArray)
			}
		}
		return newArray
}

console.log(findOdds(array))