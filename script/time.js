var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
	greeting = 'Boa Noite, ';
} else if (hourNow > 12){
	greeting = 'Boa Tarde, ';
} else if (hourNow > 0){
	greeting = 'Bom Dia, ';
} else {
	greeting = ' ';
}

document.write('<span class="title-body">'+ greeting + 'Seja bem Vindo' + '</span>')