function biggest(a, b, c) {
	if (a >= b && a >= c) {
		return a;
	}	
	else if (b >= a && b >= c) {
		return b;
	}
	
	return c;
	
}
a = 500
b = 355
c = 45


console.log(biggest(a, b, c))
