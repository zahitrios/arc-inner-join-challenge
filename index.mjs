const a = [
	{
		id: 1,
		name: "Robert",
		age: 37,
	},
	{
		id: 2,
		name: "Jhon",
		age: 34,
	},
	{
		id: 3,
		name: "ANDREW",
		age: 34,
	},
];

const b = [
	{
		id: 45,
		name: "Robert",
		street: "Main st 456",
	},
	{
		id: 45,
		name: "ROberT",
		street: "Evergreen 123",
	},
	{
		id: 90,
		name: "Jhon",
		street: "Fairfield 45",
	},
	{
		id: 23,
		name: "Joshep",
		street: "Evergreen 123",
	},
	{
		id: 23,
		name: "Rita",
		street: "Evergreen 123",
	},
];

function innerJoin(leftArray, rightArray, key) {
	const leftMaped = [];
	leftArray.forEach(leftItem => (leftMaped[leftItem[key].toLowerCase()] = leftItem));

	const result = rightArray.reduce((acc, rightItem) => {
		const leftValues = leftMaped[rightItem[key].toLowerCase()];
		if (leftValues !== undefined)
			acc.push({
				...leftValues,
				...rightItem,
				name: leftValues.name.toLowerCase(),
			});
		return acc; //return the current array for the next iteration
	}, []);

	console.log(result);
}

innerJoin(a, b, "name");
