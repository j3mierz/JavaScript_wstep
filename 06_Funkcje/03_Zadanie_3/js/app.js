function calculatetip(amount, rating) {
	if (rating == "Bardzo dobra obsługa") return amount * 0.25;
	else if (rating == "Dobra obsługa") return amount * 0.20;
	else if (rating == "Średnia obsługa") return amount * 0.15;
	else return 0;
}


console.log(calculatetip(100, "naura"));
