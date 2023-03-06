/*
  FormData API P4: keys, values, entries
*/

const form = document.querySelector('.form')

// (***) must select all the inputs
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const passwordInput = document.querySelector('.password-input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  const keys = [...formData.keys()]
  console.log(keys)

  const values = [...formData.values()]
  console.log(values)

  // (***) return array of arrays > [[key, value],[],[]]
  const entries = [...formData.entries()]
  console.log(entries)
})
