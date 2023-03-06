/*
  FormData API P3
*/

const form = document.querySelector('.form')

// (***) must select all the inputs
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // (1) create formData that links to the form
  const formData = new FormData(e.currentTarget)
  console.log(formData) // this object has many helper functions (similar to array) to help us work with form easily

  // (2)
  const values = formData.values() // return iterators
  console.log([...values])
})
