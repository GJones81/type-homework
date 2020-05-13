let test1: string = 'level'
let test2: string = 'civic'
let test3: string = 'kayak'
let test4: string = 'noon'
let test5: string = 'racecar'
let falseTest: string = 'a santa dog ived as a devl god at nasa'

const palindromeTest = (test: string):any=> {
	let splitString: Array<string> = test.split('')
	let stringLength: number = splitString.length
	let middle: number = Math.floor(stringLength / 2)
	console.log(stringLength)
	console.log(middle)
	for (let i: number = 0; i < middle; i++){
		if (splitString[i] !== splitString[((stringLength-1) - i)]) {
		return false
		}
	}
	return true
}

console.log(palindromeTest(falseTest))