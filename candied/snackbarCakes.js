let snackbar = document.querySelector('#snackbar');
let btnBasket = document.querySelector('#btnBasket');

function snackbarCakes() {
	var popup = document.getElementById('snackbar');

	popup.snackbar = 'show';

	setTimeout(function() {
		popup.snackbar = popup.snackbar.replace('show', '');
	}, 3000);
}
