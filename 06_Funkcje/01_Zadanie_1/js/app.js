function suming(table) {
	let suma = 0
	for (let i = 0; i < table.length; i++) {
		suma += table[i];
	}
	return suma
}

const a = [1, 2, 3, 4, 5];

console.log(suming(a))

