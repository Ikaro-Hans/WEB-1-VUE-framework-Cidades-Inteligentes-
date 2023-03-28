const verif = document.getElementById('send');
verif.addEventListener('click', function() {
	const inp = document.getElementById('recipient-name');
	const valor = inp.value.trim();
	if (valor === ''){
		alert('O campo não pode ficar vazio!');
	}
});