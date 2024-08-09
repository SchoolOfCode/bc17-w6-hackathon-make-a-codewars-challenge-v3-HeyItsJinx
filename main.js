// const countLetters = word => {
// //create the object which will store the occurrences
//     const count = {};
// }

function wordLength(word) {
	let counter = 0; for (let i = 0; i < word.length; i++) {
		counter++;
	}
	return counter;
}
console.log(wordLength("Coding"));