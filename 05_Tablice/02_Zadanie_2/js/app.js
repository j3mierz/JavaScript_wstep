
const numbers = []

while (numbers.length < 10) {
	numbers.push(Math.floor(Math.random() * 61));

}
console.log(numbers)
for (let i = 0; i < numbers.length ; i++) {
	if (numbers[i] % 2 == 1) {
		numbers[i] += 1;
	}
	
	
}
console.log(numbers)
