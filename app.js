/*
  FormData API P2: Why
*/

const form = document.querySelector('.form')

// (***) must select all the inputs
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // (***) to get the values, we must go through many steps
  const nameValue = nameInput.value
  const emailValue = emailInput.value
  const passwordValue = passwordInput.value

  console.log(nameValue, emailValue, passwordValue)

  // (***)
  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
})
