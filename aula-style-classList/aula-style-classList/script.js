const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')
const success_message = document.getElementsByClassName('success_message')

title[0].style.color = 'rgb(161, 32, 161)'

// error_text[0].classList.add('visible')
// console.log(username_input.value)

function validateForms() {
    if (username_input.value != 'jucilene') {
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
    if (password_input.value != '123') {
        error_text[1].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
}


// validateForms()

function showSuccessMessage() {
    success_message[0].classList.add('visible')
}
