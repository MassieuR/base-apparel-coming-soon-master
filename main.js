const form = document.querySelector('form');
const input = document.querySelector('input');
const inputErr = document.querySelector('.input-error');
const errorSign = document.querySelector('.error-sign');

const checkEmail = (e) => {
    if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        errorSign.classList.remove('hidden');
        inputErr.classList.remove('hidden');
    }
}


form.addEventListener('submit', checkEmail)