//declare element variables - menu and button
let hamburgerBtn = document.querySelector('#hamburgerBtn');
let crossBtn = document.querySelector('#crossBtn');
let dropMenu = document.querySelector('.dropdown');

//event listener
hamburgerBtn.addEventListener('click', myDropdown);
crossBtn.addEventListener('click', myDropdown);

//function for dropdown
function myDropdown() {
	dropMenu.classList.toggle('hide');
	dropMenu.classList.toggle('show');
}
