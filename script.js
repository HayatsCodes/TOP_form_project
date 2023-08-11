const pswInput = document.getElementById('password');
const confirmPswInput = document.getElementById('confirm-password');

function validatePassword() {
    console.log(pswInput.value < 8)
    if (pswInput.value < 8 || pswInput.value !== confirmPswInput.value) {
        confirmPswInput.style.border = 'none';
        confirmPswInput.style.outline = '1px solid red';
    } else {
        confirmPswInput.style.outline = 'none';
        confirmPswInput.style.outline = '1px solid blue';
    }
}

confirmPswInput.addEventListener('focus', validatePassword);