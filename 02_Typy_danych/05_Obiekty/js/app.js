const car = {
	type : "sedan",
	color : "green",
	engine : 2.0

}

let result = car.type + " " + car.color + " " + car.engine

console.log(result);
const color = {
	red : 100,
	green : 0,
	blue : 50
		
	
}

let referencecolor = color
referencecolor.red = 50
referencecolor.green = 50 
color.red = 32
console.log(color.red)
