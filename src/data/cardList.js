const tagNames = ['tag', 'leaf', 'key', 'car', 'cake', 'star'];

// duplicates all items in an array
function duplicateItems(arr) {
	let dupe = [];
	for (let i = 0; i < arr.length; i++) {
		dupe.push(arr[i]);
		dupe.push(arr[i]);
	}
	return dupe;
}

// returns an array with the same elements in different indicies
function randomizeArray(arr) {
	let arrCopy = arr;
	let currentIndex = arr.length;
	let randomArray = [];
	while (currentIndex > 0) {
		let randomNum = Math.floor(Math.random() * currentIndex);
		randomArray.push(arrCopy[randomNum]);
		arrCopy.splice(randomNum, 1);
		currentIndex--;
	}
	return randomArray;
}

export default randomizeArray(duplicateItems(tagNames));
