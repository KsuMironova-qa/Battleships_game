var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess; // undefined
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false) {
	guess = prompt("Ты готов поиграть? Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Введи цифру от 0 до 6");
	} else {
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3) {
			alert("Ранил");
			hits = hits + 1;
			if(hits == 3) {
				isSunk = true;
				alert("Убил! Спасибо за игру!");
			}
		} else {
			alert("Мимо!");
		}
	}
}
var status = "Ты выстрелил " + guesses + " раз. Твоя точность равна " + (3 / guesses);
alert(status);