const message = document.querySelector('#textinput');
const zipInput = document.querySelector('#input');
const form = document.querySelector('#textbox');
const zips = document.querySelector('#zipConverter');
const reset = document.querySelector('#reset-button');
const countOutput = document.querySelector('#countOutput');
const mobileMenu = document.querySelector('#mobile-menu');
const menuOpen = document.querySelector('#menu-button');
const menuClose = document.querySelector('#menu-close');

/* ==============================
@Menu
============================== */
// *MENU OPEN
menuOpen.addEventListener('click', function(e) {
	// PREVENT DEFAULT SUBMIT BEHAVIOR
	e.preventDefault();
	mobileMenu.style.transform = 'translateX(0px)';
});

// *MENU CLOSE
menuClose.addEventListener('click', function(e) {
	// PREVENT DEFAULT SUBMIT BEHAVIOR
	e.preventDefault();
	mobileMenu.style.transform = 'translateX(-500px)';
});
2;
/* ==============================
@Character Count
============================== */
// *PUT Character Counter IN BODY
form.addEventListener('submit', function(e) {
	// PREVENT DEFAULT SUBMIT BEHAVIOR
	e.preventDefault();

	// GET Character Counter
	const value = message.value;
	const count = value.length;

	// DISPLAY COUNT IN BODY
	countOutput.innerHTML = count;
});

// *RESET FORM TO 0
reset.addEventListener('click', function(e) {
	// PREVENT DEFAULT SUBMIT BEHAVIOR
	e.preventDefault();
	// CLEAR ON SUBMIT
	countOutput.innerHTML = '0';
	message.value = '';
});

/* ==============================
@Zip Converter
============================== */
// *Get Zips
zips.addEventListener('submit', function(e) {
	e.preventDefault();
	const zipVal = zipInput.value;
	console.log(zipVal);
});
