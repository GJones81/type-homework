let array1: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f']

let array2: Array<number> = [1, 2, 3, 4, 5, 6]

const zipper = (item1: Array<string | number>, item2: Array<string | number>): Array<string | number> => {
	let newArray: Array<string | number> = []
	while (item1.length || item2.length > 0) {
		if (item1.length > 0) {
			newArray.push(item1.shift())
		}
		if (item2.length > 0) {
			newArray.push(item2.shift())
		}
	}
	return newArray
}

console.log(zipper(array1, array2))