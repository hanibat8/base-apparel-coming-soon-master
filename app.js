const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail+ span.error');

email.addEventListener('input', function(event) {
	if (email.validity.valid) {
		emailError.innerHTML = '';
		emailError.className = 'error';
	} else {
		showError();
	}
});

form.addEventListener('submit', function(event) {
	if (!email.validity.valid) {
		showError();
		if (email.validity.valueMissing) {
			emailError.textContent = 'You need to enter an email address.';
			email.style.border = '1px solid rgb(231, 26, 26)';
		}
		event.preventDefault();
	}
});

function showError() {
	if (email.validity.typeMismatch) {
		emailError.textContent = 'Please provide a valid email.';
		email.style.border = '1px solid rgb(231, 26, 26)';
	}

	emailError.className = 'error active';
}
